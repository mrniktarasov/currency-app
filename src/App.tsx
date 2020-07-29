import React, {useState, useEffect} from 'react';
import styles from './App.module.css'
import RateController from "./RateController/RateController";


type ratesMap = Map<string, number>
type SetFuncs = (rates: ratesMap) => void;

function App() {

    let [rates, setRates] = useState<ratesMap>(new Map());
    let [value, setValue] = useState<number>();

    useEffect(() => {
        getRates(setRates);
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.rateWrapper}>
                <RateController
                    value= {value}
                    setValue= {setValue}
                    order={0}
                    rates={rates}
                />
                <RateController
                    value= {value}
                    setValue= {setValue}
                    order={1}
                    rates={rates}
                />
            </div>
        </div>
      );
}

function getRates(setRates: SetFuncs) {
    let url = 'https://api.exchangeratesapi.io/latest';
    fetch(url)
        .then(response => response.json())
        .then((response) => {
            let map: ratesMap = new Map(Object.entries(response['rates']));
            let sortedMap: ratesMap = new Map([...map.entries()].sort());
            setRates(sortedMap);
        })
        .catch((err) => console.log(err));
}

export default App;

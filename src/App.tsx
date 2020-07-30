import React, {useState, useEffect} from 'react';
import styles from "./App.module.css";
import AddButton from "./AddButton/AddButton";
import RateController from "./RateController/RateController";
import DeleteButton from "./DeleteButton/DeleteButton";
import {ratesMap, SetFuncs} from "./react-app-env";


function App() {

    let [rates, setRates] = useState<ratesMap>(new Map());
    let [value, setValue] = useState<number | null>(null);
    let [rateControllerList, setRateControllerList] = useState<Array<Object>>([]);

    useEffect(() => {
        getRates(setRates);
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.intro}>{'Transfer at different exchange rates'}<br/>
                {'according to the European Central Bank'}</div>
            <a href={'https://www.ecb.europa.eu/'}>{'https://www.ecb.europa.eu/'}</a>
            <div className={styles.controlWrapper}>
                <AddButton
                    ratesList={rateControllerList}
                    value= {value}
                    setValue= {setValue}
                    rates={rates}
                    setRatesList={setRateControllerList}
                />
                <DeleteButton
                    ratesList={rateControllerList}
                    setRatesList={setRateControllerList}
                />
            </div>
            <ul className={styles.rateWrapper}>
                {rateControllerList.map((rate, index) =>
                    <li key={index}>
                        <RateController
                            value= {value}
                            setValue= {setValue}
                            rates={rates}
                        />
                    </li>
                )}
            </ul>
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

import React, {useState} from 'react';
import styles from './RateController.module.css';
import {RateControllerProps} from "../react-app-env";


export default function RateController(props: RateControllerProps) {

    function toLocalRate(localValue: number | null, localRate: string): number | undefined {
        if(rates && localValue) {
            // @ts-ignore
            let result = Number((localValue * rates.get(localRate)).toFixed(2));
            return result;
        }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        let target = event.target as HTMLInputElement;
        let num_value: number = Number(parseFloat(target.value).toFixed(2));
        // @ts-ignore
        setValue(num_value/rates.get(rate));
    }

    function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>): void {
        let target = event.target as HTMLSelectElement;
        setRate(target.value);
    }


    let [rate, setRate] = useState<string>('USD');
    const {value, setValue, rates} = props;
    let listOptions: JSX.Element[] = [];
    if(rates) {
        for(let key of rates.keys()) {
            listOptions.push(<option key={key}>{key}</option>)
        }
    }
    return (
        <div className={styles.main}>
            <input
                type='text'
                placeholder='Value'
                className={styles.valueRate}
                onChange={handleInputChange}
                value={toLocalRate(value, rate)}
            />
            <select
                className={styles.valueRate}
                value={rate}
                onChange={handleSelectChange}
            >
                {listOptions}
            </select>
        </div>
    );
}


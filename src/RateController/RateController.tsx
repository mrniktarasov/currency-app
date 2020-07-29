import React, {useEffect, useState} from 'react';
import styles from './RateController.module.css';


export interface Props {
    value: number | undefined,
    setValue: React.Dispatch<React.SetStateAction<number | undefined>>
    order: number,
    rates: Map<string, number>,
}


export default function RateController(props: Props) {

    function toLocalRate(localValue: number | null, localRate: string): number | undefined {
        if(rates && localValue) {
            console.log(rates.get(localRate));
            // @ts-ignore
            return localValue * rates.get(localRate);
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
    const {order, value, setValue, rates} = props;
    let listOptions: JSX.Element[] = [];
    if(rates) {
        for(let key of rates.keys()) {
            listOptions.push(<option key={key}>{key}</option>)
        }
        console.log(listOptions);
    }

    let inputValue: number | null = value ? value : null;

    return (
        <div className={styles.main}>
            <input
                type='text'
                placeholder='Value'
                className={styles.valueRate}
                onChange={handleInputChange}
                value={toLocalRate(inputValue, rate)}
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


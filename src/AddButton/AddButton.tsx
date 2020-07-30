import React from 'react';
import styles from './AddButton.module.css';
import {AddButtonProps} from "../react-app-env";


export default function addButton(props: AddButtonProps) {

    function handleClick(event: React.MouseEvent): void {
        let addedRates = [...ratesList];
        let rateController = {
            value,
            setValue,
            rates,
        };
        addedRates.push(rateController);
        setRatesList(addedRates);
    }

    const {ratesList, value, setValue, rates, setRatesList} = props;

    return (
        <button
            className={styles.addButton}
            onClick={handleClick}
            disabled={ratesList.length > 5}
        >Add</button>
    );
}

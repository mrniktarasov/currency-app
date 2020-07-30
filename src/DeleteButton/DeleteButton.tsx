import React from 'react';
import {DeleteButtonProps} from '../react-app-env';
import styles from './DeleteButton.module.css';


export default function deleteButton(props: DeleteButtonProps) {

    function handleClick(event: React.MouseEvent): void {
        let new_rates = [...ratesList];
        if(new_rates.length) {
            new_rates.pop();
            setRatesList(new_rates);
        }
    }

    const {ratesList, setRatesList} = props;

    return (
        <button
            className={styles.deleteButton}
            onClick={handleClick}
            disabled={ratesList.length === 0}
        >Delete</button>
    );
}
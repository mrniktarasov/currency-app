/// <reference types="react-scripts" />
import React from "react";

export type ratesMap = Map<string, number>
export type SetFuncs = (rates: ratesMap) => void;

export interface RateControllerProps {
    value: number | null,
    setValue: React.Dispatch<React.SetStateAction<number | null>>,
    rates: Map<string, number>,
}

export interface AddButtonProps extends RateControllerProps {
    ratesList: Array<Object>,
    setRatesList: React.Dispatch<React.SetStateAction<Array<Object>>>,
}

export interface DeleteButtonProps {
    ratesList: Array<Object>,
    setRatesList: React.Dispatch<React.SetStateAction<Array<Object>>>,
}

declare module '*.css'
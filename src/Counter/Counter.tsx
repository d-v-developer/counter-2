import {Button} from "../Button/Button.tsx";
import {useState} from "react";
import cn from './Counter.module.css'
import {CounterDisplay} from "./CounterDisplay/CounterDisplay.tsx";

type Props = {
    maxValue: number;
    startValue: number;
    changeEditMode: () => void
}

export const Counter = ({ startValue, maxValue, changeEditMode }: Props) => {

    const [counter, setCounter] = useState(startValue);
    const [isError, setIsError] = useState(false);

    const onClickButtonIncHandler = () => {
        setCounter(prev => {
            const newValue = prev + 1
            if (newValue >= maxValue) setIsError(true)
            else setIsError(false)
            return newValue});
    }

    const onClickButtonResetHandler = () => {
        setCounter(startValue)
        setIsError(false);
    }

    return (
        <div className={cn['counter']}>
            <CounterDisplay value={counter} isError={isError} />
            <div className={cn['buttons']}>
                <Button title={"inc"} callback={onClickButtonIncHandler} disabled={isError}/>
                <Button title={"reset"} callback={onClickButtonResetHandler}/>
                <Button title={'settings'} callback={changeEditMode} />
            </div>
        </div>
    );
};
import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import {BetCounterProps} from "./types";
import {useBalanceContext} from "../../context/BalanceContext";
import {useBetsContext} from "../../context/BetsContext";
import './BetCounter.scss';

const BetCounter = ({isActive, title}: BetCounterProps) => {
    const [betValue, setBetValue] = useState(0);
    const [disabledReduce, setDisabledReduce] = useState(true);
    const [disabledAdd, setDisabledAdd] = useState(false);
    const {balance} = useBalanceContext();
    const {totalBets, setTotalBets, betsData, setBetsData} = useBetsContext();

    useEffect(() => {
        setBetValue(500)
        if(isActive) {
                setBetsData(oldArray => [...oldArray, {title: title, bet: betValue}])
                setTotalBets(totalBets + betValue)
        } else {
            setTotalBets( totalBets - betValue)
            setBetsData(betsData.filter(i => i.title !== title))
        }
    },[isActive])

    useEffect(() => {
        if(betValue > 500) {
            setDisabledReduce(false)
        } else {
            setDisabledReduce(true)
        }

        if(balance - totalBets <= 0) {
            setDisabledAdd(true)
        } else {
            setDisabledAdd(false)
        }
    }, [betValue, isActive, totalBets])

    const addBet = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setBetValue(betValue + 500)
        setTotalBets(totalBets + 500)
        setBetsData([...betsData.filter(i => i.title !== title), {title: title, bet: betValue + 500}])
    }

    const reduceBet = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setBetValue(betValue - 500)
        setTotalBets(totalBets - 500)
        setBetsData([...betsData.filter(i => i.title !== title), {title: title, bet: betValue - 500}])
    }

    return (
        <div className={classNames("bet-counter", { ["bet-counter--active"] : isActive })}>
            <button className="bet-counter__btn"
                    onClick={reduceBet}
                    disabled={disabledReduce}>-</button>
           <div className="bet-counter__value" >{betValue}</div>
            <button className="bet-counter__btn"
                    onClick={addBet}
                    disabled={disabledAdd}
            >+</button>
        </div>
    );
};

export default BetCounter;
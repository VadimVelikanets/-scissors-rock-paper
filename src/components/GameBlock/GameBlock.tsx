import React, {useEffect, useState} from 'react';
import {GameBlockProps} from "./types";
import BetCounter from "../BetCounter/BetCounter";
import {useBalanceContext} from "../../context/BalanceContext";
import {useBetsContext} from "../../context/BetsContext";
import './GameBlock.scss';

const GameBlock = ({title}: GameBlockProps) => {
    const [isActive, setIsActive] = useState(false);
    const {balance} = useBalanceContext();
    const {totalBets, betsData} = useBetsContext();

    useEffect(() => {
        if(!!betsData.find(i => i.title === title)) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [betsData, title])

    const onBetHander = () => {
        if(balance > totalBets && betsData.length < 2) {
            setIsActive(!isActive)
        } else {
            setIsActive(false)
        }
    }

    return (
        <div className={`game-block game-block--${title}`} onClick={onBetHander}>
            <BetCounter isActive={isActive} title={title}/>
            <div className="game-block__title">{title}</div>
        </div>
    );
};

export default GameBlock;
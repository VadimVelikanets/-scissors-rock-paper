import React from 'react';
import {GameBlockProps} from "./types";
import BetCounter from "../BetCounter/BetCounter";
import {useBalanceContext} from "../../context/BalanceContext";
import {useBetsContext} from "../../context/BetsContext";
import './GameBlock.scss';
const GameBlock = ({title, onBet, isActive}: GameBlockProps) => {
    const {balance} = useBalanceContext();
    const {bets} = useBetsContext();
    const onBetHander = () => {
        if(balance > bets) {
            onBet()
        }

        if(balance <= bets && isActive) {
            onBet()
        }
    }

    return (
        <div className={`game-block game-block--${title}`} onClick={onBetHander}>
            <BetCounter isActive={isActive}/>
            <div className="game-block__title">{title}</div>
        </div>
    );
};

export default GameBlock;
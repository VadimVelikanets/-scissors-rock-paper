import React, {memo, useEffect} from 'react';
import {GameTitleProps} from "./types";
import './GameTitle.scss';
import {useWinsContext} from "../../context/WinsContext";
import {useBetsContext} from "../../context/BetsContext";

const GameTitle = ({isSubmited, betResult}: GameTitleProps) => {
    const {wins} = useWinsContext();
    const {betsData, totalBets} = useBetsContext()
    const currentData = betsData.map(item => item.title).join(' ')

    return (
        <>
            {isSubmited ? (
                <>
                    <div className="game-title">Computer: <span className="game-title__value">{betResult}</span></div>
                    <div className="game-title">You: <span className="game-title__value">{currentData}</span></div>
                    {wins > 0 ? (
                        <div className="game-title">You win: <span className="game-title__value">{wins}</span></div>
                    ) : (
                        <div className="game-title">You lost: <span className="game-title__value">{totalBets}</span></div>
                    ) }
                </>
            ) : (
                <div className="game-title">Pick your position</div>
            )}
        </>
    );
};

export default GameTitle;
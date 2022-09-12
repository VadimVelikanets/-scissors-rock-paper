import React, {memo} from 'react';
import {GameTitleProps} from "./types";
import './GameTitle.scss';
import {useWinsContext} from "../../context/WinsContext";

const GameTitle = ({isSubmited}: GameTitleProps) => {
    const {wins} = useWinsContext()
    return (
        <>
            {isSubmited ? (
                <div className="game-title">You wins: {wins}</div>
            ) : (
                <div className="game-title">Pick your position</div>
            )}
        </>
    );
};

export default memo(GameTitle);
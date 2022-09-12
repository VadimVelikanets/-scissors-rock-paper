import React, {useEffect, useState} from 'react';
import './BetSubmit.scss'
import {useBalanceContext} from "../../context/BalanceContext";
import {useBetsContext} from "../../context/BetsContext";
import {useWinsContext} from "../../context/WinsContext";
import {checkBetValue} from "../../utils/checkBetValue";
import {BetSubmitProps} from "./types";

const BetSubmit = ({onSubmited, isSubmited, onSetResult}: BetSubmitProps) => {
    const {balance, setBalance} = useBalanceContext();
    const {totalBets, setTotalBets, betsData, setBetsData} = useBetsContext();
    const {setWins} = useWinsContext();
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if(betsData.length === 0) {
            setDisabled(true)
            setTotalBets(0)
        } else {
            setDisabled(false)
        }
    }, [betsData, setTotalBets])


    const onPlayBet = () => {
        onSetResult(checkBetValue({betsData, balance, totalBets, setBalance, setWins}))
        onSubmited(true)
    }

    const onClearBet = () => {
        setWins(0)
        onSubmited(false)
        setBetsData([])
    }

    return (
        <>
            {isSubmited ? (
                <button className="btn-play"
                        onClick={onClearBet}
                >Clear</button>
            ) : (
                <button className="btn-play"
                        disabled={disabled}
                        onClick={onPlayBet}
                >Play</button>
            )}
        </>
    );
};

export default BetSubmit;
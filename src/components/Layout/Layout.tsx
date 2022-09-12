import React, {useEffect, useState} from 'react';
import './Layout.scss';
import GameBlock from "../GameBlock/GameBlock";
import {checkBetValue} from "../../utils/checkBetValue";
import {useBalanceContext} from "../../context/BalanceContext";
import {useBetsContext} from "../../context/BetsContext";
import {useWinsContext} from "../../context/WinsContext";
import GameTitle from "../GameTitle/GameTitle";

const Layout = () => {
    const {balance, setBalance} = useBalanceContext();
    const { bets, setBets} = useBetsContext();
    const {wins, setWins} = useWinsContext();
    const [betsArray, setBetsArray] = useState<string[]>([]);
    const [isSubmited, setSubmited] = useState(false)
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if(betsArray.length === 0) {
            setDisabled(true)
            setBets(0)
        } else {
            setDisabled(false)
        }
    }, [betsArray])

    const onToggleBet = (item: string) => {
        if(!!betsArray.find(i => i === item)) {
            setBetsArray(betsArray.filter(i => i !== item))
        } else {
            if(betsArray.length < 2) {
                setBetsArray(oldArray => [...oldArray, item]);
            }
        }
    }

    const onPlayBet = () => {
        checkBetValue({betsArray, balance, bets, wins, setBalance, setBets, setWins})
        setSubmited(true)
    }

    const onClearBet = () => {
        setBetsArray([])
        setWins(0)
        setSubmited(false)
    }

    return (
        <div className="layout">
            <div className="container">
                <div className="layout__inner">
                    <GameTitle isSubmited={isSubmited}/>
                    <div className="game-blocks-wrapper">
                        <GameBlock title="rock"
                                   onBet={() =>onToggleBet('rock')}
                                   isActive={!!betsArray.find(i => i === 'rock')}
                        />
                        <GameBlock title="paper"
                                   onBet={() =>onToggleBet('paper')}
                                   isActive={!!betsArray.find(i => i === 'paper')}
                        />
                        <GameBlock title="scissors"
                                   onBet={() =>onToggleBet('scissors')}
                                   isActive={!!betsArray.find(i => i === 'scissors')}
                        />
                    </div>
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
                </div>
            </div>
        </div>
    );
};

export default Layout;
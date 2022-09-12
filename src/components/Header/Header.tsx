import React from 'react';
import './Header.scss';
import {useBalanceContext} from "../../context/BalanceContext";
import {useBetsContext} from "../../context/BetsContext";
import {useWinsContext} from "../../context/WinsContext";

const Header = () => {
    const {balance} = useBalanceContext();
    const {totalBets} = useBetsContext();
    const {wins} = useWinsContext();
    return (
        <div className="header">
            <div className="container">
                <div className="header-data">
                    <div className="header-data-item">
                        <span className="header-data-item__title">Balance: </span>
                        <span className="header-data-item__value">{balance}</span>
                    </div>
                    <div className="header-data-item">
                        <span className="header-data-item__title">Bet: </span>
                        <span className="header-data-item__value">{totalBets}</span>
                    </div>
                    <div className="header-data-item">
                        <span className="header-data-item__title">Win: </span>
                        <span className="header-data-item__value">{wins}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
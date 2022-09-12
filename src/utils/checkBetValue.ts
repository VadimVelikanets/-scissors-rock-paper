import {getRandomBetValue} from "./getRandomBetValue";

type checkBetValueTypes = {
    betsArray: string[],
    balance: number,
    wins: number,
    bets: number,
    setBalance: (num: number) => void,
    setBets: (num: number) => void,
    setWins: (num: number) => void,
}

export const checkBetValue = ({betsArray, balance, bets, wins, setBalance, setBets, setWins}: checkBetValueTypes) => {
    const result = getRandomBetValue();
    if(!!betsArray.find(i => i == result)){
        if(betsArray.length === 1) {
            setBalance(balance - 500 + 14 * 500);
            setWins(wins + 14 * 500)
        }

        if(betsArray.length === 2) {
            setBalance(balance - 2* 500 + 3 * 2 * 500);
            setWins(wins + 3 * 2 * 500)
        }
    } else {
        setBalance(balance - 500)
    }

    console.log(result, balance)
}
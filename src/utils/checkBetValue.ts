import {getRandomBetValue} from "./getRandomBetValue";
import {betDataItem} from "../context/BetsContext";

type checkBetValueTypes = {
    betsData: betDataItem[],
    balance: number,
    totalBets: number,
    setBalance: (num: number) => void,
    setWins: (num: number) => void,
}

export const checkBetValue = ({betsData, balance, totalBets, setBalance, setWins}: checkBetValueTypes) => {
    const result = getRandomBetValue();
    if(!!betsData.find(i => i.title === result)){
        const index = betsData.findIndex(item => item.title === result);
        if(betsData.length === 1) {
            setBalance(balance - totalBets + 14 * betsData[index].bet);
            setWins( 14 * betsData[index].bet)
        }

        if(betsData.length === 2) {
            setBalance(balance - totalBets + 3 * betsData[index].bet);
            setWins(3 * betsData[index].bet)
        }
    } else {
        setBalance(balance - totalBets)
    }

    return result
}
import {betPositions} from "../constants/betPositions";

export const getRandomBetValue = () => {
    const index = Math.floor(Math.random() * betPositions.length);
    return betPositions[index]
}
type GameBlockEnum = 'rock' | 'paper' | 'scissors';

export type GameBlockProps = {
    title: GameBlockEnum,
    onBet: () => void,
    isActive: boolean
}
import React, {useContext, type ReactNode, useState, useMemo} from 'react';

type WinsContextTypes = {
    wins: number,
    setWins: React.Dispatch<React.SetStateAction<number>>
}

type WinsProviderProps = {
    children: ReactNode
}

export const WinsContext = React.createContext<WinsContextTypes>({
    wins: 0,
    setWins: () => {},
})

export function useWinsContext(): WinsContextTypes {
    return useContext(WinsContext)
}
export const WinsProvider = ({children}: WinsProviderProps) => {
    const [wins, setWins] = useState(0);

    const memoWinsContextValue = useMemo(() => {
        return {wins, setWins}
    }, [wins, setWins])

    return (<WinsContext.Provider value={memoWinsContextValue}>{children}</WinsContext.Provider>)
}
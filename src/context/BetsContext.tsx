import React, {useContext, type ReactNode, useState, useMemo} from 'react';

type BetsContextTypes = {
    bets: number,
    setBets: React.Dispatch<React.SetStateAction<number>>
}

type BetsProviderProps = {
    children: ReactNode
}

export const BetsContext = React.createContext<BetsContextTypes>({
    bets: 0,
    setBets: () => {}
})

export function useBetsContext(): BetsContextTypes {
    return useContext(BetsContext)
}
export const BetsProvider = ({children}: BetsProviderProps) => {
    const [bets, setBets] = useState(0);

    const memoBetsContextValue = useMemo(() => {
        return {bets, setBets}
    }, [bets, setBets])

    return (<BetsContext.Provider value={memoBetsContextValue}>{children}</BetsContext.Provider>)
}
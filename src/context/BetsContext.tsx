import React, {useContext, type ReactNode, useState, useMemo} from 'react';

export type betDataItem = {
    title: string,
    bet: number
}
type BetsContextTypes = {
    betsData: betDataItem[],
    setBetsData: React.Dispatch<React.SetStateAction<betDataItem[]>>,
    totalBets: number,
    setTotalBets: React.Dispatch<React.SetStateAction<number>>
}

type BetsProviderProps = {
    children: ReactNode
}

export const BetsContext = React.createContext<BetsContextTypes>({
    betsData: [],
    setBetsData: () => {},
    totalBets: 0,
    setTotalBets: () => {}
})

export function useBetsContext(): BetsContextTypes {
    return useContext(BetsContext)
}
export const BetsProvider = ({children}: BetsProviderProps) => {
    const [totalBets, setTotalBets] = useState(0);
    const [betsData, setBetsData] = useState<betDataItem[]>([]);

    const memoBetsContextValue = useMemo(() => {
        return {totalBets, setTotalBets, betsData, setBetsData}
    }, [totalBets, setTotalBets, betsData, setBetsData])

    return (<BetsContext.Provider value={memoBetsContextValue}>{children}</BetsContext.Provider>)
}
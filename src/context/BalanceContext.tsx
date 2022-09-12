import React, {useContext, type ReactNode, useState, useMemo} from 'react';

type BalanceContextTypes = {
    balance: number,
    setBalance: React.Dispatch<React.SetStateAction<number>>
}

type BalanceProviderProps = {
    children: ReactNode
}

export const BalanceContext = React.createContext<BalanceContextTypes>({
    balance: 5000,
    setBalance: () => {},
})

export function useBalanceContext(): BalanceContextTypes {
    return useContext(BalanceContext)
}
export const BalanceProvider = ({children}: BalanceProviderProps) => {
    const [balance, setBalance] = useState(5000);

    const memoBalanceContextValue = useMemo(() => {
        return {
            balance, setBalance
        }
    }, [balance, setBalance])

    return (<BalanceContext.Provider value={memoBalanceContextValue}>{children}</BalanceContext.Provider>)
}
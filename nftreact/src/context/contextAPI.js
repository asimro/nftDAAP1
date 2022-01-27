import React, { createContext, useReducer, useEffect } from 'react'
import { AppReducer } from './Reducer';
import { loadBlockChain } from './web3call';

const initialState = {
    web3: null,
    accounts: [],
    contract: null,
    name: null,
    symbol: null,
    totalSupply: "",
    maxSupply: "",
    fundRais: "",
    buyRate: "",
    balanceOf: "",
    transaction: []
}
// getAllEvents: [],
// Error: null,

export const UserContext = createContext(initialState);



export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        loadBlockChain(dispatch)
    }, [])

    return (
        <UserContext.Provider value={[state, dispatch]}>

            {children}
        </UserContext.Provider>
    )
}

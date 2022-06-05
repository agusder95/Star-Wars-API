import React, { createContext, useState } from 'react';

const StateContext = createContext({})

export const StateContextProvider = ({children}) => {

    const [estado, setEstado] = useState('perosn')

    return <StateContext.Provider value={{
            estado,
            setEstado
        }}>
            {children}

        </StateContext.Provider>
    
}

export default StateContext
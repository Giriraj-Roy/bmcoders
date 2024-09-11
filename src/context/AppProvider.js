import React, { useState } from 'react'
import { AppContext } from './AppContext'

const AppProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState({});

    const val = {
        currentUser, setCurrentUser
    }

  return (
    <AppContext.Provider value={val}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider
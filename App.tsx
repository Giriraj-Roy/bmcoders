import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import AppProvider from './src/context/AppProvider'

const App = () => {
  return (
    <AppProvider>
      <AppNavigation/>
    </AppProvider>
  )
}

export default App
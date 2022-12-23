import React from 'react'
import { Home } from './pages/Home'
import { globalStyles } from './styles/global/styles'

export const App: React.FC = () => {
  globalStyles()

  return <Home />
}

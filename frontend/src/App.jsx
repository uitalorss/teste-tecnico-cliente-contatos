
import { AppRoutes } from './Routes/AppRoutes'
import { UserContextProvider } from './context/UserContext'
import { GlobalStyled } from './global'

function App() {

  return (
    <UserContextProvider>
      <AppRoutes />
      <GlobalStyled />
    </UserContextProvider>
  )
}

export default App

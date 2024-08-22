
import { AppRoutes } from './Routes/AppRoutes'
import { AuthContextProvider } from './context/AuthContext'
import { UserContextProvider } from './context/UserContext'
import { GlobalStyled } from './global'

function App() {

  return (
    <AuthContextProvider>
      <UserContextProvider>
        <AppRoutes />
        <GlobalStyled />
      </UserContextProvider>
    </AuthContextProvider>
  )
}

export default App


import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes/AppRoutes'
import { GlobalStyled } from './global'

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyled />
    </BrowserRouter>
  )
}

export default App

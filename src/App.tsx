import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AddressProvider } from './contexts/AddressContext'
import { CartProvider } from './contexts/CartContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <BrowserRouter>
        <CartProvider>
          <AddressProvider>
            <Router />
          </AddressProvider>
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { CoffeeContextProvider } from './context/CoffeeProvider'
import { DefaultLayout } from './layouts/DefaultLayout'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CoffeeContextProvider>
        <DefaultLayout />
      </CoffeeContextProvider>
    </ThemeProvider>
  )
}

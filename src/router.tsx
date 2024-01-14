import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Thanks } from './pages/Thanks'
import { Checkout } from './pages/Checkout'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<Thanks />} />
        <Route path="/History" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

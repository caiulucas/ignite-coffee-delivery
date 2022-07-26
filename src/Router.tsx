import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ConfirmOrder } from './pages/ConfirmOrder'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/confirm-order" element={<ConfirmOrder />} />
      </Route>
    </Routes>
  )
}

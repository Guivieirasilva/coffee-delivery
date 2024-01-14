import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <header>
      Logo
      <div>
        <div>localização</div>
        <div>carrinho</div>
      </div>
      <Outlet />
    </header>
  )
}

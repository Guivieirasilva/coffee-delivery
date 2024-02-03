import { Link, Outlet } from 'react-router-dom'
import { Container, LayoutContainer, LocationLinks } from './styles'
import LOGO from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCoffees } from '../../hooks/useCoffes'

export function DefaultLayout() {
  const { cart } = useCoffees()
  return (
    <Container>
      <LayoutContainer>
        <Link to="/">
          <img src={LOGO} alt="" />
        </Link>
        <LocationLinks>
          <div>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </div>
          <Link to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            {cart.length > 0 && <span>{cart.length}</span>}
          </Link>
        </LocationLinks>
      </LayoutContainer>
      <Outlet />
    </Container>
  )
}

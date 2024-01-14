import { Link, Outlet } from 'react-router-dom'
import { Container, LayoutContainer, LocationLinks } from './styles'
import LOGO from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function DefaultLayout() {
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
          <Link to="/Checkout">
            <ShoppingCart size={22} weight="fill" />
            <span>3</span>
          </Link>
        </LocationLinks>
      </LayoutContainer>
      <Outlet />
    </Container>
  )
}

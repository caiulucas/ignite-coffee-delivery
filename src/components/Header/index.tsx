import { Cart, HeaderContainer, Location } from './styles'

import LogoSvg from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={LogoSvg}
        alt="Coffee Delivery Logo (A cup of coffee with a rocket)"
      />

      <nav>
        <Location>
          <MapPin weight="fill" /> Ouro Preto, MG
        </Location>
        <Link to="/confirm-order">
          <Cart>
            <ShoppingCart weight="fill" />
          </Cart>
        </Link>
      </nav>
    </HeaderContainer>
  )
}

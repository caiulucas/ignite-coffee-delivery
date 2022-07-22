import { Cart, HeaderContainer, Location } from './styles'

import LogoSvg from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={LogoSvg}
        alt="Coffee Delivery Logo (A cup of coffee with a rocket)"
      />

      <div>
        <Location>
          <MapPin weight="fill" /> Ouro Preto, MG
        </Location>
        <Cart>
          <ShoppingCart weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  )
}

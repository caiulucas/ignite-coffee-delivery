import { Cart, HeaderContainer, Location } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import LogoSvg from '../../assets/logo.svg'
import { useAddress } from '../../contexts/AddressContext'
import { useCart } from '../../contexts/CartContext'

export function Header() {
  const { cartList } = useCart()
  const { address } = useAddress()

  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src={LogoSvg}
          alt="Coffee Delivery Logo (A cup of coffee with a rocket)"
        />
      </Link>

      <nav>
        {address && (
          <Location>
            <MapPin weight="fill" /> {address.city}, {address.uf}
          </Location>
        )}
        <Link to="/confirm-order">
          <Cart>
            <ShoppingCart weight="fill" />

            {cartList.length > 0 && <span>{cartList.length}</span>}
          </Cart>
        </Link>
      </nav>
    </HeaderContainer>
  )
}

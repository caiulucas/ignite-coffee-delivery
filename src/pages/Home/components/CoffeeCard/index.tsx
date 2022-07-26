import {
  BuyButton,
  Category,
  CoffeeContainer,
  PricingContainer,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import ExpressoPng from '../../../../assets/expresso.png'
import { Spinner } from '../../../../components/Spinner'

export function CoffeeCard() {
  return (
    <CoffeeContainer>
      <img src={ExpressoPng} alt="Expresso Coffee" />
      <Category>Tradicional</Category>
      <h3>Expresso tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <PricingContainer>
        <p>
          <span>R$ </span>9,90
        </p>

        <div>
          <Spinner size="l" />
          <BuyButton>
            <ShoppingCart weight="fill" />
          </BuyButton>
        </div>
      </PricingContainer>
    </CoffeeContainer>
  )
}

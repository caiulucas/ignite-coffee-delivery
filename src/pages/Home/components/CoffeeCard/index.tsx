import {
  BuyButton,
  Category,
  CoffeeContainer,
  PricingContainer,
  Spinner,
} from './styles'

import ExpressoPng from '../../../../assets/expresso.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

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
          <Spinner>
            <button>
              <Minus />
            </button>
            <p>1</p>
            <button>
              <Plus />
            </button>
          </Spinner>

          <BuyButton>
            <ShoppingCart weight="fill" />
          </BuyButton>
        </div>
      </PricingContainer>
    </CoffeeContainer>
  )
}

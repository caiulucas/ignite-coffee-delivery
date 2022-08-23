import {
  BuyButton,
  Category,
  CategoryContainer,
  CoffeeContainer,
  PricingContainer,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { Spinner } from '../../../../components/Spinner'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { useCart } from '../../../../contexts/CartContext'
import { useState } from 'react'

interface Coffee {
  id: string
  name: string
  description: string
  image: string
  price: number
  categories: string[]
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { add } = useCart()

  const [quantity, setQuantity] = useState(0)

  function handleAddCoffee() {
    add(coffee, quantity)
  }

  function handleChangeQuantity(value: number) {
    setQuantity(value)
  }

  const priceFormatted = formatCurrency(coffee.price).replace('R$', '')

  return (
    <CoffeeContainer>
      <img src={coffee.image} alt={coffee.name} />

      <CategoryContainer>
        {coffee.categories.map((category) => (
          <Category key={category}>{category}</Category>
        ))}
      </CategoryContainer>

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <PricingContainer>
        <p>
          <span>R$</span>
          {priceFormatted}
        </p>

        <div>
          <Spinner
            size="l"
            value={quantity}
            changeQuantity={handleChangeQuantity}
          />
          <BuyButton
            type="button"
            onClick={handleAddCoffee}
            disabled={!quantity}
          >
            <ShoppingCart weight="fill" />
          </BuyButton>
        </div>
      </PricingContainer>
    </CoffeeContainer>
  )
}

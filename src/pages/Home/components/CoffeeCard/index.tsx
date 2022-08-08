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

interface Coffee {
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
          <span>R$ </span>
          {formatCurrency(coffee.price)}
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

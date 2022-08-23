import { Trash } from 'phosphor-react'
import { Spinner } from '../../../../components/Spinner'
import { CoffeeContainer, CoffeeController, CoffeeInfo } from './styles'

import { useCart } from '../../../../contexts/CartContext'
import { formatCurrency } from '../../../../utils/formatCurrency'

interface CoffeeProps {
  coffee: {
    id: string
    name: string
    image: string
    price: number
  }
  quantity: number
}

export function Coffee({ coffee, quantity }: CoffeeProps) {
  const { changeQuantity, remove } = useCart()

  function handleChangeQuantity(newQuantity: number) {
    changeQuantity(coffee.id, newQuantity)
  }

  return (
    <CoffeeContainer>
      <CoffeeInfo>
        <img src={coffee.image} alt="" />
        <div>
          <p>{coffee.name}</p>
          <CoffeeController>
            <Spinner value={quantity} changeQuantity={handleChangeQuantity} />
            <button type="button" onClick={() => remove(coffee.id)}>
              <Trash />
              Remover
            </button>
          </CoffeeController>
        </div>
      </CoffeeInfo>
      <span>{formatCurrency(coffee.price)}</span>
    </CoffeeContainer>
  )
}

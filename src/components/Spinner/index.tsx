import { Minus, Plus } from 'phosphor-react'
import { Size, SpinnerContainer, Value } from './styles'

interface SpinnerProps {
  size?: Size
  value: number
  changeQuantity: (quantity: number) => void
}

export function Spinner({ size = 's', value, changeQuantity }: SpinnerProps) {
  return (
    <SpinnerContainer size={size}>
      <button
        type="button"
        disabled={!value}
        onClick={() => changeQuantity(value - 1)}
      >
        <Minus />
      </button>
      <Value>{value}</Value>
      <button type="button" onClick={() => changeQuantity(value + 1)}>
        <Plus />
      </button>
    </SpinnerContainer>
  )
}

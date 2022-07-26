import { Minus, Plus } from 'phosphor-react'
import { Size, SpinnerContainer } from './styles'

interface SpinnerProps {
  size?: Size
}

export function Spinner({ size = 's' }: SpinnerProps) {
  return (
    <SpinnerContainer size={size}>
      <button>
        <Minus />
      </button>
      <p>1</p>
      <button>
        <Plus />
      </button>
    </SpinnerContainer>
  )
}

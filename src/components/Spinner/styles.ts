import styled from 'styled-components'

export type Size = 's' | 'l'

interface SpinnerContainerProps {
  size: Size
}

const spinnerSizes = {
  s: '2rem',
  l: '2.375rem',
}

export const SpinnerContainer = styled.div<SpinnerContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  max-width: 4.5rem;
  height: ${({ size }) => spinnerSizes[size]};

  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 6px;

  button {
    border: none;
    background: none;
    border-radius: 1rem;

    width: 2rem;
    height: 2rem;

    color: ${({ theme }) => theme.purple};
    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }

    svg {
      width: 0.875rem;
      height: 0.875rem;
    }
  }
`

export const Value = styled.p`
  margin: 0;
  line-height: 0;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme['base-title']};
`

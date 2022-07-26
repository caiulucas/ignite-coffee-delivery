import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px 36px;

  padding: 0 1.25rem 1.5rem;

  img {
    position: relative;
    top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }

  h3 {
    margin-top: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.25rem;
  }

  > p {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme['base-label']};
    font-size: 0.875rem;
    text-align: center;
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const Category = styled.span`
  display: block;
  background-color: ${({ theme }) => theme['yellow-light']};

  color: ${({ theme }) => theme['yellow-dark']};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.625rem;

  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
`

export const PricingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;

  gap: 1.5rem;

  > p {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;

    color: ${({ theme }) => theme['base-text']};

    span {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
    }
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`

export const BuyButton = styled.button`
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme['purple-dark']};

  min-width: 2.375rem;
  height: 2.375rem;

  color: ${({ theme }) => theme.white};
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.purple};
  }

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }

  &:disabled,
  &:disabled:hover {
    filter: brightness(75%);
    background: ${({ theme }) => theme['purple-dark']};
    cursor: not-allowed;
  }
`

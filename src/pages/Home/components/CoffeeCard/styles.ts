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

  p {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme['base-label']};
    font-size: 0.875rem;
    text-align: center;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-top: 2rem;

    gap: 1.5rem;
  }
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
  p {
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

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  max-width: 4.5rem;
  height: 2.375rem;

  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 6px;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme['base-title']};
  }

  button {
    border: none;
    background: none;
    border-radius: 1rem;

    width: 2rem;
    height: 2rem;

    color: ${({ theme }) => theme.purple};

    svg {
      width: 0.875rem;
      height: 0.875rem;
    }
  }
`

export const BuyButton = styled.button`
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme['purple-dark']};

  min-width: 2.375rem;
  height: 2.375rem;

  color: ${({ theme }) => theme.white};

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }
`

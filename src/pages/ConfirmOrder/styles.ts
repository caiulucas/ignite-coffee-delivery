import styled, { css } from 'styled-components'

export const ConfirmOrderContainer = styled.main`
  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  form {
    display: grid;
    grid-template-columns: 40rem 28rem;
    gap: 2rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
  }
`

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const FormTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${({ theme }) => theme['yellow-dark']};
  }

  div {
    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-text']};
    }
  }
`

export const PaymentMethod = styled.div`
  margin-top: 2rem;
  display: flex;

  justify-content: space-between;
  gap: 0.75rem;
`

interface PaymentMethodButtonProps {
  selected?: boolean
}

export const PaymentMethodButton = styled.button<PaymentMethodButtonProps>`
  width: 100%;
  border: none;
  ${({ theme, selected }) =>
    selected &&
    css`
      outline: 1px solid ${theme.purple};
    `}
  background-color: ${({ theme }) => theme['base-button']};

  padding: 1rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  gap: 0.75rem;
  font-size: 0.75rem;
  border-radius: 6px;

  color: ${({ theme }) => theme['base-text']};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.purple};
  }
`

export const SelectedCoffees = styled.div`
  background-color: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;

  border-radius: 6px 44px;
`

export const CoffeeList = styled.ul``

export const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 1.5rem;

  > div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-text']};
    }

    span {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`

export const ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.yellow};
  text-align: center;
  text-transform: uppercase;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.white};
  font-weight: 700;

  padding: 0.75rem 0;

  border: none;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }

  &:disabled,
  &:disabled:hover {
    cursor: not-allowed;
    filter: brightness(75%);
    background-color: ${({ theme }) => theme.yellow};
  }
`

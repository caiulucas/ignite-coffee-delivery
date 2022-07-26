import styled from 'styled-components'

export const ConfirmOrderContainer = styled.main`
  display: grid;
  grid-template-columns: 40rem 28rem;
  gap: 2rem;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
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

export const FormBody = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'neighborhood city uf';
  gap: 1rem;

  margin-top: 2rem;

  input {
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 4px;

    background-color: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};
    padding: 0.75rem;
    font-size: 0.875rem;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme['yellow-dark']};
    }
  }
`
export const PaymentMethod = styled.div`
  margin-top: 2rem;
  display: flex;

  justify-content: space-between;
  gap: 0.75rem;

  button {
    border: none;
    background-color: ${({ theme }) => theme['base-button']};

    padding: 1rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    gap: 0.75rem;
    font-size: 0.75rem;
    border-radius: 6px;

    color: ${({ theme }) => theme['base-text']};

    svg {
      width: 1rem;
      height: 1rem;
      color: ${({ theme }) => theme.purple};
    }
  }
`

export const SelectedCoffees = styled.div`
  background-color: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;

  border-radius: 6px 44px;
`

export const CoffeeList = styled.ul``

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
  padding-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  span {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-text']};
  }

  & + & {
    padding-top: 1.5rem;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 1.25rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`
export const CoffeeController = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    background-color: ${({ theme }) => theme['base-button']};
    border: none;
    border-radius: 6px;
    height: 2rem;
    padding: 0 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme['base-text']};

    svg {
      width: 1rem;
      height: 1rem;
      color: ${({ theme }) => theme.purple};
    }
  }
`

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
`

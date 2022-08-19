import styled from 'styled-components'

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

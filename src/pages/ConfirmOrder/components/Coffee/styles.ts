import styled from 'styled-components'

export const CoffeeContainer = styled.div`
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

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme['base-hover']};
    }

    svg {
      width: 1rem;
      height: 1rem;
      color: ${({ theme }) => theme.purple};
    }
  }
`

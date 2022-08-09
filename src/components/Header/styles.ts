import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  width: 72rem;
  padding: 2rem 1rem;
  margin: 0 auto;

  > nav {
    display: flex;
    gap: 1rem;
  }
`

const BadgeBase = styled.span`
  display: flex;
  padding: 0.625rem 0.5rem;
  border-radius: 6px;
  height: 2.375rem;

  align-items: center;
  gap: 0.25rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }
`

export const Location = styled(BadgeBase)`
  background-color: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme.purple};
`

export const Cart = styled(BadgeBase)`
  background-color: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme.yellow};
  width: 2.375rem;
  justify-content: center;
  cursor: pointer;
`

import styled from 'styled-components'

export type Variant = 'yellow-dark' | 'yellow' | 'base-text' | 'purple'

export interface BenefitProps {
  variant: Variant
}

export const HomeContainer = styled.main``

export const Greetings = styled.div`
  display: flex;
  gap: 3.5rem;
  margin: 5.75rem 0;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const Headline = styled.div`
  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme['base-title']};
  }

  p {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.25rem;
  }
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;

  margin-top: 4.125rem;
`

export const Benefit = styled.p<BenefitProps>`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.white};

    height: 2rem;
    width: 2rem;
    border-radius: 1rem;

    background-color: ${({ theme, variant }) => theme[variant]};

    margin-right: 0.75rem;
  }
`

export const CoffeesContainer = styled.div`
  margin-top: 4.625rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
`

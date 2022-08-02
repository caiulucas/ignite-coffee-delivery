import styled from 'styled-components'

export type Variant = 'purple' | 'yellow' | 'yellow-dark'

interface InfoProps {
  variant: Variant
}

export const ReviewOrderContainer = styled.div`
  h1 {
    color: ${({ theme }) => theme['yellow-dark']};
    font-size: 2rem;
  }
  main {
    margin-top: 2.5rem;
    display: flex;
    gap: 6.375rem;

    justify-content: space-between;

    section {
      flex: 1;
      background-color: ${({ theme }) => theme['base-card']};
      border: 1px double transparent;
      border-radius: 6px 36px;
      background-image: linear-gradient(
          ${({ theme }) => theme.background},
          ${({ theme }) => theme.background}
        ),
        radial-gradient(
          circle at top left,
          ${({ theme }) => theme['gradient-yellow-purple']}
        );
      background-origin: border-box;
      background-clip: content-box, border-box;

      > div {
        padding: 2.5rem;

        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }

    img {
      max-width: 30.75rem;
      max-height: 19rem;
    }
  }
`

export const Info = styled.div<InfoProps>`
  display: flex;

  span {
    background-color: ${({ theme, variant }) => theme[variant]};
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 1rem;

    color: ${({ theme }) => theme.white};
    margin-right: 0.75rem;
  }

  > div {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
  }
`

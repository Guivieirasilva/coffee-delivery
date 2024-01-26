import styled from 'styled-components'
import { mixins } from '../../styles/mixins'
import { DefaultTheme } from 'styled-components/dist/types'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 2rem;
  max-width: 1440px;
  gap: 2rem;

  @media (max-width: 950px) {
    align-items: center;
  }

  > div {
    @media (max-width: 950px) {
      text-align: center;
    }
    > h1 {
      ${mixins.fonts.titleL}
      color: ${({ theme }) => theme.colors.yellow.dark};
    }
    > p {
      ${mixins.fonts.textL}
    }
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 950px) {
      flex-direction: column;
    }

    > div {
      flex: 1;
      > img {
        width: 100%;
      }
    }
  }
`
export const BorderGradient = styled.div`
  flex: 1;

  border: 2px solid transparent;
  border-radius: 6px 36px;

  background-origin: border-box;
  background-image: ${({ theme }: DefaultTheme) =>
    `linear-gradient(to bottom right, ${theme.colors.yellow.medium}, ${theme.colors.purple.medium})`};
`
export const Info = styled.div`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2.5rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > div {
    align-self: flex-start;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    > svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`

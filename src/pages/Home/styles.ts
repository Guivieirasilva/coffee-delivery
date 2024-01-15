import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const ContainerHero = styled.section`
  display: flex;
  width: 100%;
  max-width: 1120px;
  padding: 6rem 0.5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 4rem;
  }

  img#bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`

export const HeroContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 4rem;
  flex: 1;

  @media (max-width: 850px) {
    align-items: center;
  }

  #grids {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;

    > div {
      display: flex;
      align-items: center;
      gap: 12px;

      svg {
        padding: 8px;
        border-radius: 999px;
      }
    }
  }
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors['base-title']}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  @media (max-width: 850px) {
    > h1 {
      text-align: center;
    }
  }
`

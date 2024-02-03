import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const ContainerHome = styled.main`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`

export const ContainerHero = styled.section`
  display: flex;
  width: 100%;
  padding: 4rem 0.5rem;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 4rem;
  }

  div.imgHero {
    flex: 1;
    > img {
      width: 100%;
    }
  }

  img#bg {
    position: absolute;
    max-height: 100%;
    width: 100%;
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
    align-items: center;
    > h1 {
      text-align: center;
    }
  }
`

export const CoffeeList = styled.section`
  max-width: 1440px;
  padding: 32px 20px 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  > div {
    width: 90%;
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 40px;
    grid-column-gap: 32px;
    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 850px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export const ContainerCoffees = styled.section`
  display: grid;

  gap: 16px;
  width: 90%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

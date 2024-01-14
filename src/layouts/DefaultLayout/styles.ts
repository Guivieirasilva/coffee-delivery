import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const LayoutContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1160px;
  padding: 32px 20px;
`
export const LocationLinks = styled.aside`
  display: flex;
  gap: 12px;

  div {
    background-color: ${({ theme }) => theme.colors.purple.light};
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.purple.medium};
  }
  a {
    background-color: ${({ theme }) => theme.colors.yellow.light};
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    position: relative;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.yellow.dark};
      svg {
        color: ${({ theme }) => theme.colors.yellow.light};
      }
    }

    svg {
      color: ${({ theme }) => theme.colors.yellow.dark};
      position: relative;
      transition: color 0.3s;
    }

    span {
      ${mixins.fonts.textS};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.yellow.dark};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
    div {
      background-color: transparent;
      position: absolute;
    }
  }
`

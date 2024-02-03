import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CoffeeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 256px;

  img {
    margin-top: -20px;
  }
`

export const Tags = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.yellow.light};
    color: ${({ theme }) => theme.colors.yellow.dark};
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`
export const Title = styled.strong`
  ${mixins.fonts.titleS}
  margin-top: 0.5rem;
`

export const Description = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors['base-label']};
  ${mixins.fonts.textS}
`
export const Control = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    ${mixins.fonts.textS}
  }
`
export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors['base-text']};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.colors.green : theme.colors.purple.dark};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors.yellow : theme.colors.purple};
    }
  }
`

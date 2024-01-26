import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  padding: 1rem 2rem;
  max-width: 1440px;
  h2 {
    ${mixins.fonts.titleS}
  }

  @media (max-width: 750px) {
    flex-direction: column;
  }
`
export const CheckoutSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
const Heading = styled.div`
  display: flex;
  gap: 8px;

  div {
    h3 {
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    p {
      ${mixins.fonts.textS};
    }
  }
`
export const AddressHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors.yellow.dark};
  }
`
export const PaymentHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors.purple.medium};
  }
`
const ColumnsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  border-radius: 6px;
  width: 100%;
  max-width: 640px;
  background-color: ${({ theme }) => theme.colors['base-card']};
`
export const AddressSection = styled(ColumnsSection)``
export const PaymentSection = styled(ColumnsSection)``

export const CoffeeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 2.5rem;
    max-width: 640px;
    border-radius: 8px 28px;
    background-color: ${({ theme }) => theme.colors['base-card']};

    p {
      text-align: center;
      ${mixins.fonts.titleXS}
      a {
        text-decoration: none;
      }
    }
  }
`
export const FormContainer = styled.form`
  display: grid;
  gap: 0.75rem;
  grid-template-rows: repeat(4 1fr);

  .separator {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: 1fr 2fr;
  }
  .separator2 {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: 2fr 2fr 1fr;
  }
`
export const FormOfPaymentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    /* flex-direction: column; */
  }
`
export const FormOfPaymentButton = styled.button`
  ${mixins.fonts.buttonM}
  background-color: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.2rem 1rem;
  width: 100%;
  height: 51px;
  border-radius: 6px;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  svg {
    color: ${({ theme }) => theme.colors.purple.dark};
  }
`
export const Coffees = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  > div {
    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    align-items: stretch;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`
export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    padding: 6px 8px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple.medium};
    }

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`
export const CartTotal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  > button {
    ${mixins.fonts.buttonG}
    align-self: center;
    width: 90%;
    height: 51px;
    border-radius: 6px;
    transition: background-color 0.3s linear;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.yellow.medium};

    &:hover {
      background-color: ${({ theme }) => theme.colors.yellow.dark};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.yellow.light};
      cursor: not-allowed;
    }
  }
`
export const ItemsTotal = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`

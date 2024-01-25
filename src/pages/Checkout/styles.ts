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

export const CoffeeSection = styled(CheckoutSection)``

export const EmptyCoffee = styled(ColumnsSection)`
  align-items: center;
  justify-content: center;
  border-radius: 8px 26px;

  p {
    ${mixins.fonts.titleXS}
    a {
      text-decoration: none;
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

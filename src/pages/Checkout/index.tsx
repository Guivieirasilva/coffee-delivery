import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  AddressHeading,
  AddressSection,
  CheckoutSection,
  CoffeeSection,
  Container,
  EmptyCoffee,
  FormContainer,
  FormOfPaymentButton,
  FormOfPaymentSection,
  PaymentHeading,
  PaymentSection,
} from './styles'
import { TextInput } from '../../components/Form/Input'

export function Checkout() {
  return (
    <Container>
      <CheckoutSection>
        <h2>Complete seu pedido</h2>
        <AddressSection>
          <AddressHeading>
            <MapPinLine size={32} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressHeading>
          <FormContainer action="">
            <TextInput placeholder="Cep" />
            <TextInput placeholder="Rua" />
            <div className="separator">
              <TextInput placeholder="Número" />
              <TextInput placeholder="Complemento" optional={true} />
            </div>
            <div className="separator2">
              <TextInput placeholder="Bairro" />
              <TextInput placeholder="Cidade" />
              <TextInput placeholder="UF" />
            </div>
          </FormContainer>
        </AddressSection>
        <PaymentSection>
          <PaymentHeading>
            <CurrencyDollar size={32} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O Pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentHeading>
          <FormOfPaymentSection>
            <FormOfPaymentButton name="credito" type="button">
              {' '}
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO{' '}
            </FormOfPaymentButton>
            <FormOfPaymentButton name="debito" type="button">
              {' '}
              <Bank size={16} />
              CARTÃO DE DÉBITO{' '}
            </FormOfPaymentButton>
            <FormOfPaymentButton name="dinheiro" type="button">
              {' '}
              <Money size={16} />
              DINHEIRO{' '}
            </FormOfPaymentButton>
          </FormOfPaymentSection>
        </PaymentSection>
      </CheckoutSection>

      <CoffeeSection>
        <h2>Cafés selecionados</h2>
        <EmptyCoffee>
          <p>
            seu carrinho está vazio 😭 <br /> Clique <a href="#">aqui</a> para
            voltar á loja{' '}
          </p>
        </EmptyCoffee>
      </CoffeeSection>
    </Container>
  )
}

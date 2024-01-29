/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import {
  AddressHeading,
  AddressSection,
  CartTotal,
  CheckoutSection,
  CoffeeInfo,
  CoffeeSection,
  Coffees,
  Container,
  FormContainer,
  FormOfPaymentButton,
  FormOfPaymentSection,
  ItemsTotal,
  PaymentHeading,
  PaymentSection,
} from './styles'
import { TextInput } from '../../components/Form/Input'
import { QuantityInput } from '../../components/Form/QuantityInput'
import { useState } from 'react'

interface FormCheckouType {
  cep: string
  number: string
  complement: string
  street: string
  district: string
  city: string
  uf: string
  formOfPayment: 'cash' | 'credit' | 'debit' | ''
}

interface ResponseCepSearchType {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
  erro: boolean
}

export function Checkout() {
  const [hide] = useState(true)

  const [form, setForm] = useState<FormCheckouType>({
    cep: '',
    city: '',
    complement: '',
    district: '',
    number: '',
    street: '',
    uf: '',
    formOfPayment: '',
  })

  const isFormComplete = () => {
    // Excluir o campo 'complement' da verificação
    const { complement, ...fieldsToCheck } = form

    // Verificar se todos os campos restantes estão preenchidos
    return Object.values(fieldsToCheck).every((value) => value.trim() !== '')
  }

  async function buscarInformacoesCEP() {
    if (form.cep.length < 8) return

    try {
      const response = await fetch(`https://viacep.com.br/ws/${form.cep}/json/`)

      const data: ResponseCepSearchType = await response.json()

      if (data.erro) {
        alert(
          'Não foi possível buscar informações do CEP informando, por favor preencha os campos manualmente!',
        )
      }

      setForm((prevForm) => ({
        ...prevForm,
        city: data.localidade,
        district: data.bairro,
        street: data.logradouro,
        uf: data.uf,
      }))
    } catch (error) {
      console.error(error)
      return null
    }
  }

  function formatCEP(cep: string) {
    cep = cep.replace(/\D/g, '')

    cep = cep.replace(/^(\d{5})(\d{3})$/, '$1-$2')

    return cep
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'cep') {
      setForm((prevForm) => ({
        ...prevForm,
        cep: formatCEP(value),
      }))
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }))
    }
  }

  function handleFormOfPayment(payment: 'cash' | 'credit' | 'debit') {
    setForm((prevState) => ({
      ...prevState,
      formOfPayment: payment,
    }))
  }

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
            <TextInput
              value={form.cep}
              name="cep"
              onChange={handleChange}
              placeholder="Cep"
              onBlur={buscarInformacoesCEP}
            />
            <TextInput
              value={form.street}
              name="street"
              onChange={handleChange}
              placeholder="Rua"
            />
            <div className="separator">
              <TextInput
                value={form.number}
                name="number"
                onChange={handleChange}
                placeholder="Número"
              />
              <TextInput
                value={form.complement}
                name="complement"
                onChange={handleChange}
                placeholder="Complemento"
                optional={true}
              />
            </div>
            <div className="separator2">
              <TextInput
                value={form.district}
                name="district"
                onChange={handleChange}
                placeholder="Bairro"
              />
              <TextInput
                value={form.city}
                name="city"
                onChange={handleChange}
                placeholder="Cidade"
              />
              <TextInput
                value={form.uf}
                name="uf"
                onChange={handleChange}
                placeholder="UF"
              />
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
            <FormOfPaymentButton
              IsActive={form.formOfPayment === 'credit'}
              onClick={() => handleFormOfPayment('credit')}
              name="credit"
              type="button"
            >
              {' '}
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO{' '}
            </FormOfPaymentButton>
            <FormOfPaymentButton
              IsActive={form.formOfPayment === 'debit'}
              onClick={() => handleFormOfPayment('debit')}
              name="debit"
              type="button"
            >
              {' '}
              <Bank size={16} />
              CARTÃO DE DÉBITO{' '}
            </FormOfPaymentButton>
            <FormOfPaymentButton
              IsActive={form.formOfPayment === 'cash'}
              onClick={() => handleFormOfPayment('cash')}
              name="cash"
              type="button"
            >
              {' '}
              <Money size={16} />
              DINHEIRO{' '}
            </FormOfPaymentButton>
          </FormOfPaymentSection>
        </PaymentSection>
      </CheckoutSection>

      <CoffeeSection>
        <h2>Cafés selecionados</h2>

        {hide ? (
          <div>
            <Coffees>
              <div>
                <img src="" alt="" />

                <div>
                  <span>Americano</span>

                  <CoffeeInfo>
                    <QuantityInput
                      quantity={2}
                      incrementQuantity={() => {}}
                      decrementQuantity={() => {}}
                    />

                    <button onClick={() => {}}>
                      <Trash />
                      <span>Remover</span>
                    </button>
                  </CoffeeInfo>
                </div>
              </div>

              <aside>R$ 19,00</aside>
            </Coffees>
            <span />
            <CartTotal>
              <div>
                <ItemsTotal>
                  <span>Total de itens</span>
                  <span>R$ 9,90</span>
                </ItemsTotal>
                <ItemsTotal>
                  <span>Entrega</span>
                  <span>R$ 9,90</span>
                </ItemsTotal>
                <ItemsTotal>
                  <span>Total</span>
                  <span>R$ 9,90</span>
                </ItemsTotal>
              </div>
              <button type="submit" disabled={!isFormComplete()}>
                CONFIRMAR PEDIDO
              </button>
            </CartTotal>
          </div>
        ) : (
          <div>
            <p>
              seu carrinho está vazio 😭 <br /> Clique <a href="#">aqui</a> para
              voltar á loja{' '}
            </p>
          </div>
        )}
      </CoffeeSection>
    </Container>
  )
}

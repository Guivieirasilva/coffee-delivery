import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import imageDelivery from '../../assets/images/delivery.svg'
import { useTheme } from 'styled-components'
import { BorderGradient, Container, Info } from './styles'
import { useCoffees } from '../../hooks/useCoffes'
import { useParams } from 'react-router-dom'

export function Thanks() {
  const { orders } = useCoffees()
  const { orderId } = useParams()

  const OrderCurrent = orders.find((item) => item.id === Number(orderId))

  const theme = useTheme()

  const paymentMethodValues = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
    '': undefined,
  }

  function paymentMethod(method: 'cash' | 'credit' | 'debit' | '') {
    return paymentMethodValues[method]
  }

  console.log(orderId)
  console.log(OrderCurrent)

  if (OrderCurrent) {
    return (
      <Container>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <section>
          <BorderGradient>
            <Info>
              <div>
                <MapPin
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple.medium }}
                />
                <p>
                  Entrega em <strong>{OrderCurrent.street}</strong> <br />
                  {OrderCurrent.district} - {OrderCurrent.city},{' '}
                  {OrderCurrent.uf}
                </p>
              </div>
              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow.medium }}
                />
                <p>
                  Previsão de entrega <br />
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
              <div>
                <CurrencyDollar
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow.dark }}
                />
                <p>
                  Pagamento na entrega <br />
                  <strong>{paymentMethod(OrderCurrent?.formOfPayment)}</strong>
                </p>
              </div>
            </Info>
          </BorderGradient>
          <div>
            <img
              src={imageDelivery}
              alt="Uma pessoa em cima da moto levando uma caixa de entrega"
            />
          </div>
        </section>
      </Container>
    )
  } else {
    return null
  }
}

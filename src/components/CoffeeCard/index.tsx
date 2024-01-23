import { CheckFat, ShoppingCart } from '@phosphor-icons/react'
import {
  CoffeeContainer,
  Tags,
  Title,
  Description,
  Control,
  Price,
  Order,
} from './styles'
import coffeeExample from '../../assets/coffees/expresso.svg'
import { QuantityInput } from '../Form/QuantityInput'
import { useState } from 'react'
import { useTheme } from 'styled-components'

export function CoffeeCard() {
  const theme = useTheme()
  const [isItemAdded] = useState(false)

  return (
    <CoffeeContainer>
      <img src={coffeeExample} alt="" />
      <Tags>
        <span>tradicional</span>
      </Tags>
      <Title>Expresso Tradicional</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <Control>
        <Price>
          <span>R$</span>
          <span>9,90</span>
        </Price>
        <Order>
          <QuantityInput
            quantity={1}
            incrementQuantity={() => {}}
            decrementQuantity={() => {}}
          />

          <button disabled={isItemAdded}>
            {isItemAdded ? (
              <CheckFat
                weight="fill"
                size={22}
                color={theme.colors['base-card']}
              />
            ) : (
              <ShoppingCart
                weight="fill"
                size={22}
                color={theme.colors['base-card']}
              />
            )}
          </button>
        </Order>
      </Control>
    </CoffeeContainer>
  )
}

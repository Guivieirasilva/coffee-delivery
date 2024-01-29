import { CheckFat, ShoppingCart } from '@phosphor-icons/react'
import {
  Tags,
  Title,
  Description,
  Control,
  Price,
  Order,
  CoffeeContainer,
} from './styles'

import { QuantityInput } from '../Form/QuantityInput'
import { useState } from 'react'
import { useTheme } from 'styled-components'

interface CoffeesCardProps {
  coffee: {
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeeCard({ coffee }: CoffeesCardProps) {
  const theme = useTheme()
  const [isItemAdded] = useState(false)
  const { image, description, price, tags, title } = coffee

  return (
    <CoffeeContainer>
      <img src={image} alt={description} />
      <Tags>
        {tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </Tags>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Control>
        <Price>
          <span>R$</span>
          <span>{price.toFixed(2)}</span>
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

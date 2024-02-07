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
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useCoffees } from '../../hooks/useCoffes'

export interface Props {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeeCard({ coffee }: Props) {
  const theme = useTheme()
  const { addCoffee } = useCoffees()
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const { image, description, price, tags, title } = coffee

  function decrementQuantity() {
    setQuantity((state) => Math.max(state - 1, 1))
  }

  function incrementQuantity() {
    setQuantity((state) => {
      if (state < 10) {
        return state + 1
      } else {
        alert('Você só pode selecionar até 10 cafés do mesmo tipo.')
        return state
      }
    })
  }

  function handleAddCoffee() {
    addCoffee({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let time: NodeJS.Timeout | undefined

    if (isItemAdded) {
      time = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (time) {
        clearTimeout(time)
      }
    }
  }, [isItemAdded])

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
        <Order $itemAdded={isItemAdded}>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button onClick={handleAddCoffee} disabled={isItemAdded}>
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

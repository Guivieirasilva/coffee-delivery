/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormCheckouType } from '../pages/Checkout'
import { Item, Order, cartReducer } from '../reducers/cart/reducer'
import {
  addCoffeeAction,
  checkoutAction,
  decrementCoffeQuantityAction,
  incrementCoffeeQuantityAction,
  removeCoffeeAction,
} from '../reducers/cart/actions'

interface CoffeeProviderProps {
  cart: Item[]
  orders: Order[]
  addCoffee: (item: Item) => void
  removeCoffee: (itemId: Item['id']) => void
  incrementCoffeeQuantity: (itemId: Item['id']) => void
  decrementCoffeeQuantity: (itemId: Item['id']) => void
  checkout: (formCheckout: FormCheckouType) => void
}

interface CoffeeContextProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeProviderProps)

export function CoffeeContextProvider({ children }: CoffeeContextProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )

  const navigate = useNavigate()

  const { cart, orders } = cartState

  function addCoffee(item: Item) {
    dispatch(addCoffeeAction(item))
  }

  function removeCoffee(itemId: Item['id']) {
    dispatch(removeCoffeeAction(itemId))
  }

  function incrementCoffeeQuantity(itemId: Item['id']) {
    dispatch(incrementCoffeeQuantityAction(itemId))
  }

  function decrementCoffeeQuantity(itemId: Item['id']) {
    dispatch(decrementCoffeQuantityAction(itemId))
  }

  function checkout(formCheckout: FormCheckouType) {
    dispatch(checkoutAction(formCheckout, navigate))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CoffeeContext.Provider
      value={{
        cart,
        orders,
        addCoffee,
        removeCoffee,
        incrementCoffeeQuantity,
        decrementCoffeeQuantity,
        checkout,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

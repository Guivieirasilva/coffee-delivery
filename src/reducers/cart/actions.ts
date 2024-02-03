import { NavigateFunction } from 'react-router-dom'
import { FormCheckouType } from '../../pages/Checkout'
import { Item } from './reducer'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  INCREMENT_COFFEE_QUANTITY = 'INCREMENT_COFFEE_QUANTITY',
  DECREMENT_COFFEE_QUANTITY = 'DECREMENT_COFFEE_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions =
  | {
      type: ActionTypes.ADD_COFFEE
      payload: {
        item: Item
      }
    }
  | {
      type:
        | ActionTypes.REMOVE_COFFEE
        | ActionTypes.INCREMENT_COFFEE_QUANTITY
        | ActionTypes.DECREMENT_COFFEE_QUANTITY
      payload: {
        itemId: Item['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        formCheckout: FormCheckouType
        callback: NavigateFunction
      }
    }

export function addCoffeeAction(item: Item) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      item,
    },
  } satisfies Actions
}

export function removeCoffeeAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function incrementCoffeeQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.INCREMENT_COFFEE_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function decrementCoffeQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.DECREMENT_COFFEE_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function checkoutAction(
  formCheckout: FormCheckouType,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      formCheckout,
      callback,
    },
  } satisfies Actions
}

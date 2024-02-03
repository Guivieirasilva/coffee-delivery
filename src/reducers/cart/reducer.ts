import { produce } from 'immer'
import { ActionTypes, Actions } from './actions'
import { FormCheckouType } from '../../pages/Checkout'

export interface Item {
  id: string
  quantity: number
}

export interface Order extends FormCheckouType {
  id: number
  items: Item[]
}

export interface CartState {
  cart: Item[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return produce(state, (draft) => {
        //  captura o item a ser adicionado
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.item.id,
        )
        if (itemAlreadyAdded) {
          // incrementa a quantidade
          itemAlreadyAdded.quantity += action.payload.item.quantity
        } else {
          // adiciona um novo item
          draft.cart.push(action.payload.item)
        }
      })

    case ActionTypes.REMOVE_COFFEE:
      return produce(state, (draft) => {
        const ItemRemoveIndex = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId,
        )
        draft.cart.splice(ItemRemoveIndex, 1)
      })

    case ActionTypes.INCREMENT_COFFEE_QUANTITY:
      return produce(state, (draft) => {
        const ItemToIncrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )
        if (ItemToIncrement?.id) {
          ItemToIncrement.quantity += 1
        }
      })

    case ActionTypes.DECREMENT_COFFEE_QUANTITY:
      return produce(state, (draft) => {
        const ItemToIncrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )
        if (ItemToIncrement?.id) {
          ItemToIncrement.quantity = Math.max(1, ItemToIncrement.quantity - 1)
        }
      })

    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newForm = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.formCheckout,
        }
        draft.orders.push(newForm)
        draft.cart = []

        action.payload.callback(`/order/${newForm.id}/Thanks`)
      })
  }

  return state
}

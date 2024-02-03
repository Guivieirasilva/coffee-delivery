import { useContext } from 'react'
import { CoffeeContext } from '../context/CoffeeProvider'

export function useCoffees() {
  return useContext(CoffeeContext)
}

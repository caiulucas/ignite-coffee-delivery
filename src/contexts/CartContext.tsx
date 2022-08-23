import { createContext, ReactNode, useContext, useState } from 'react'

interface CartProviderProps {
  children: ReactNode
}

interface Coffee {
  id: string
  name: string
  image: string
  price: number
}

interface CartItem {
  coffee: Coffee
  quantity: number
}

interface CartContextProps {
  cartList: CartItem[]
  add: (coffee: Coffee, quantity: number) => void
  remove: (id: string) => void
  changeQuantity: (id: string, newQuantity: number) => void
}

const cartContext = createContext<CartContextProps>({} as CartContextProps)

const storageKey = '@CoffeeDelivery:cartList'

export function CartProvider({ children }: CartProviderProps) {
  const [cartList, setCartList] = useState<CartItem[]>(() => {
    const localCartList = localStorage.getItem(storageKey)

    if (localCartList) return JSON.parse(localCartList)

    return []
  })

  function add(coffee: Coffee, quantity: number) {
    setCartList((oldState) => {
      const newState = [...oldState, { coffee, quantity }]
      localStorage.setItem(storageKey, JSON.stringify(newState))

      return newState
    })
  }

  function remove(id: string) {
    setCartList((oldState) => {
      const newState = oldState.filter((item) => item.coffee.id !== id)
      localStorage.setItem(storageKey, JSON.stringify(newState))

      return newState
    })
  }

  function changeQuantity(id: string, newQuantity: number) {
    setCartList((oldState) => {
      const newState = oldState.map((item) =>
        item.coffee.id === id ? { ...item, quantity: newQuantity } : item,
      )
      localStorage.setItem(storageKey, JSON.stringify(newState))

      return newState
    })
  }

  return (
    <cartContext.Provider value={{ cartList, add, remove, changeQuantity }}>
      {children}
    </cartContext.Provider>
  )
}

export function useCart() {
  return useContext(cartContext)
}

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

export function CartProvider({ children }: CartProviderProps) {
  const [cartList, setCartList] = useState<CartItem[]>([])

  function add(coffee: Coffee, quantity: number) {
    setCartList((oldState) => [...oldState, { coffee, quantity }])
  }

  function remove(id: string) {
    setCartList((oldState) => oldState.filter((item) => item.coffee.id !== id))
  }

  function changeQuantity(id: string, newQuantity: number) {
    setCartList((oldState) =>
      oldState.map((item) =>
        item.coffee.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    )
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

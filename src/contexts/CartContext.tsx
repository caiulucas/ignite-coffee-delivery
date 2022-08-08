import { createContext, ReactNode, useContext, useState } from 'react'

interface CartProviderProps {
  children: ReactNode
}

interface CartItem {
  id: string
  quantity: number
}

interface CartContextProps {
  cartList: CartItem[]
  add: (id: string, quantity: number) => void
  remove: (id: string) => void
}

const cartContext = createContext<CartContextProps>({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cartList, setCartList] = useState<CartItem[]>([])

  function add(id: string, quantity: number) {
    setCartList((oldState) => [...oldState, { id, quantity }])
  }

  function remove(id: string) {
    setCartList((oldState) => oldState.filter((item) => item.id !== id))
  }

  return (
    <cartContext.Provider value={{ cartList, add, remove }}>
      {children}
    </cartContext.Provider>
  )
}

export function useCart() {
  return useContext(cartContext)
}

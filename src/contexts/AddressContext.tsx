import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'

export interface Address {
  cep: string
  street: string
  number: number
  complement: string
  neighborhood: string
  city: string
  uf: string
}

interface AddressContextProps {
  address: Address | undefined
  saveAddress: (data: Address) => void
}

const addressContext = createContext<AddressContextProps>(
  {} as AddressContextProps,
)

interface AddressProviderProps {
  children: ReactNode
}

const storageKey = '@CoffeeDelivery:address'

export function AddressProvider({ children }: AddressProviderProps) {
  const [address, setAddress] = useState<Address | undefined>(() => {
    const localAddress = localStorage.getItem(storageKey)

    if (localAddress) return JSON.parse(localAddress)

    return undefined
  })

  const saveAddress = useCallback((data: Address) => {
    localStorage.setItem(storageKey, JSON.stringify(data))
    setAddress(data)
  }, [])

  return (
    <addressContext.Provider value={{ address, saveAddress }}>
      {children}
    </addressContext.Provider>
  )
}

export function useAddress() {
  return useContext(addressContext)
}

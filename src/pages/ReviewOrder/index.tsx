import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { ReviewOrderContainer, Info } from './styles'

import DeliveryPng from '../../assets/delivery.png'
import { useAddress } from '../../contexts/AddressContext'
import { useLocation } from 'react-router-dom'

const paymentMethods = {
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
  cash: 'Dinheiro',
}

export function ReviewOrder() {
  const { address } = useAddress()
  const { state } = useLocation()

  const { paymentMethod } = state as {
    paymentMethod: 'credit' | 'debit' | 'cash'
  }

  return (
    <ReviewOrderContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <main>
        <section>
          <div>
            <Info variant="purple">
              <span>
                <MapPin weight="fill" />
              </span>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {address?.street}, {address?.number}
                  </strong>
                </p>
                <p>
                  {address?.neighborhood} - {address?.city}, {address?.uf}
                </p>
              </div>
            </Info>
            <Info variant="yellow">
              <span>
                <Timer weight="fill" />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </Info>
            <Info variant="yellow-dark">
              <span>
                <CurrencyDollar weight="fill" />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <p>{paymentMethods[paymentMethod]}</p>
              </div>
            </Info>
          </div>
        </section>

        <img src={DeliveryPng} alt="Delivery boy carrying a Coffee Delivery" />
      </main>
    </ReviewOrderContainer>
  )
}

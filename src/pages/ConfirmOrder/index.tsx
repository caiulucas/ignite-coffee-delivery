import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useCart } from '../../contexts/CartContext'
import { Coffee } from './components/Coffee'
import { Form } from './components/Form'
import {
  CoffeeList,
  ConfirmButton,
  ConfirmOrderContainer,
  FormContainer,
  FormTitle,
  PaymentMethod,
  PaymentMethodButton,
  Pricing,
  SelectedCoffees,
} from './styles'

import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import * as zod from 'zod'
import { Address, useAddress } from '../../contexts/AddressContext'
import { formatCurrency } from '../../utils/formatCurrency'

const addressFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP!'),
  street: zod.string().min(1, 'Informe a rua!'),
  number: zod.number().min(1, 'Informe o número!'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro!'),
  city: zod.string().min(1, 'Informe a cidade!'),
  uf: zod
    .string()
    .min(2, 'Informe a UF')
    .max(2, 'Uma UF contém apenas duas letras!'),
})

type AddressFormData = typeof addressFormValidationSchema

const deliveryTax = 3.5

export function ConfirmOrder() {
  const { saveAddress, address } = useAddress()
  const addressForm = useForm<AddressFormData>({
    defaultValues: address as any as AddressFormData,
    resolver: zodResolver(addressFormValidationSchema),
  })
  const { cartList } = useCart()
  const theme = useTheme()
  const navigate = useNavigate()

  const { handleSubmit, watch } = addressForm

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')

  const isSubmitDisabled = !watch() || !selectedPaymentMethod

  const cartTotal = cartList.reduce((acc, item) => {
    acc += item.coffee.price * item.quantity
    return acc
  }, 0)

  function handleCreateOrder(data: AddressFormData) {
    saveAddress(data as any as Address)
    navigate('/review-order', {
      state: { paymentMethod: selectedPaymentMethod },
    })
  }

  return (
    <ConfirmOrderContainer>
      <form onSubmit={handleSubmit(handleCreateOrder)}>
        <div>
          <h2>Confirme seu pedido</h2>

          <FormProvider {...addressForm}>
            <Form />
          </FormProvider>

          <FormContainer>
            <FormTitle>
              <CurrencyDollar color={theme.purple} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormTitle>

            <PaymentMethod>
              <PaymentMethodButton
                type="button"
                selected={selectedPaymentMethod === 'credit'}
                onClick={() => setSelectedPaymentMethod('credit')}
              >
                <CreditCard />
                Cartão de crédito
              </PaymentMethodButton>
              <PaymentMethodButton
                type="button"
                selected={selectedPaymentMethod === 'debit'}
                onClick={() => setSelectedPaymentMethod('debit')}
              >
                <Bank />
                Cartão de débito
              </PaymentMethodButton>
              <PaymentMethodButton
                type="button"
                selected={selectedPaymentMethod === 'cash'}
                onClick={() => setSelectedPaymentMethod('cash')}
              >
                <Money />
                Dinheiro
              </PaymentMethodButton>
            </PaymentMethod>
          </FormContainer>
        </div>
        <div>
          <h2>Cafés selecionados</h2>

          <SelectedCoffees>
            <CoffeeList>
              {cartList.map((item) => (
                <Coffee
                  key={item.coffee.id}
                  coffee={item.coffee}
                  quantity={item.quantity}
                />
              ))}
            </CoffeeList>
            <Pricing>
              {cartList.length ? (
                <>
                  <div>
                    <p>Total de itens</p>
                    <p>{formatCurrency(cartTotal)}</p>
                  </div>
                  <div>
                    <p>Entrega</p>
                    <p>{formatCurrency(deliveryTax)}</p>
                  </div>
                  <div>
                    <span>Total</span>
                    <span>{formatCurrency(cartTotal + deliveryTax)}</span>
                  </div>
                  <ConfirmButton type="submit" disabled={isSubmitDisabled}>
                    Confirmar Pedido
                  </ConfirmButton>
                </>
              ) : (
                <>
                  <div>
                    <p>Que pena! Nenhum café selecionado no momento</p>
                  </div>
                </>
              )}
            </Pricing>
          </SelectedCoffees>
        </div>
      </form>
    </ConfirmOrderContainer>
  )
}

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import ExpressoPng from '../../assets/expresso.png'
import { Spinner } from '../../components/Spinner'
import {
  Coffee,
  CoffeeController,
  CoffeeInfo,
  CoffeeList,
  ConfirmButton,
  ConfirmOrderContainer,
  FormBody,
  FormContainer,
  FormTitle,
  PaymentMethod,
  Pricing,
  SelectedCoffees,
} from './styles'

export function ConfirmOrder() {
  const theme = useTheme()

  return (
    <ConfirmOrderContainer>
      <div>
        <h2>Confirme seu pedido</h2>
        <form>
          <FormContainer>
            <FormTitle>
              <MapPinLine />
              <div>
                <h3>Endereço de entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormTitle>

            <FormBody>
              <input
                type="text"
                placeholder="CEP"
                style={{ gridArea: 'cep' }}
              />
              <input
                type="text"
                placeholder="Rua"
                style={{ gridArea: 'street' }}
              />
              <input
                type="number"
                placeholder="Número"
                style={{ gridArea: 'number' }}
              />
              <input
                type="text"
                placeholder="Complemento"
                style={{ gridArea: 'complement' }}
              />
              <input
                type="text"
                placeholder="Bairro"
                style={{ gridArea: 'neighborhood' }}
              />
              <input
                type="text"
                placeholder="Cidade"
                style={{ gridArea: 'city' }}
              />

              <input type="text" placeholder="UF" style={{ gridArea: 'uf' }} />
            </FormBody>
          </FormContainer>

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
              <button>
                <CreditCard />
                Cartão de crédito
              </button>
              <button>
                <Bank />
                Cartão de crédito
              </button>
              <button>
                <Money />
                Cartão de crédito
              </button>
            </PaymentMethod>
          </FormContainer>
        </form>
      </div>
      <div>
        <h2>Cafés selecionados</h2>

        <SelectedCoffees>
          <CoffeeList>
            <Coffee>
              <CoffeeInfo>
                <img src={ExpressoPng} alt="" />
                <div>
                  <p>Expresso Tradicional</p>
                  <CoffeeController>
                    <Spinner />
                    <button>
                      <Trash />
                      Remover
                    </button>
                  </CoffeeController>
                </div>
              </CoffeeInfo>
              <span>R$ 9,90</span>
            </Coffee>
            <Coffee>
              <CoffeeInfo>
                <img src={ExpressoPng} alt="" />
                <div>
                  <p>Expresso Tradicional</p>
                  <CoffeeController>
                    <Spinner />
                    <button>
                      <Trash />
                      Remover
                    </button>
                  </CoffeeController>
                </div>
              </CoffeeInfo>
              <span>R$ 9,90</span>
            </Coffee>
          </CoffeeList>
          <Pricing>
            <div>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>

            <ConfirmButton>Confirmar Pedido</ConfirmButton>
          </Pricing>
        </SelectedCoffees>
      </div>
    </ConfirmOrderContainer>
  )
}

import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { FormContainer, FormTitle } from '../../styles'
import { FormBody } from './styles'

export function Form() {
  const { register } = useFormContext()

  return (
    <>
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
            {...register('cep')}
          />
          <input
            type="text"
            placeholder="Rua"
            style={{ gridArea: 'street' }}
            {...register('street')}
          />
          <input
            type="number"
            placeholder="Número"
            style={{ gridArea: 'number' }}
            {...register('number', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Complemento"
            style={{ gridArea: 'complement' }}
            {...register('complement')}
          />
          <input
            type="text"
            placeholder="Bairro"
            style={{ gridArea: 'neighborhood' }}
            {...register('neighborhood')}
          />
          <input
            type="text"
            placeholder="Cidade"
            style={{ gridArea: 'city' }}
            {...register('city')}
          />

          <input
            type="text"
            placeholder="UF"
            style={{ gridArea: 'uf' }}
            {...register('uf')}
          />
        </FormBody>
      </FormContainer>
    </>
  )
}

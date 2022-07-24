import { Coffee, IconProps, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Benefit,
  BenefitsContainer,
  CoffeesContainer,
  Greetings,
  Headline,
  HomeContainer,
  Variant,
} from './styles'

import { FunctionComponent } from 'react'
import CoffeeHeroPng from '../../assets/coffee-hero.png'
import { CoffeeCard } from './components/CoffeeCard'

interface BenefitProps {
  text: string
  icon: FunctionComponent<IconProps>
  variant: Variant
}

const benefits: BenefitProps[] = [
  {
    text: 'Compra simples e segura',
    icon: ShoppingCart,
    variant: 'yellow-dark',
  },
  {
    text: 'Embalagem mantém o café intacto',
    icon: Package,
    variant: 'base-text',
  },
  {
    text: 'Entrega rápida e rastreada',
    icon: Timer,
    variant: 'yellow',
  },
  {
    text: 'O café chega fresquinho até você',
    icon: Coffee,
    variant: 'purple',
  },
]

export function Home() {
  return (
    <HomeContainer>
      <Greetings>
        <div>
          <Headline>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Headline>

          <BenefitsContainer>
            {benefits.map(({ text, variant, icon: Icon }) => (
              <Benefit key={text} variant={variant}>
                <span>
                  <Icon weight="fill" />
                </span>
                {text}
              </Benefit>
            ))}
          </BenefitsContainer>
        </div>
        <img
          src={CoffeeHeroPng}
          alt="Coffee Delivery cup of coffee with beans around"
        />
      </Greetings>

      <h2>Nossos cafés</h2>
      <CoffeesContainer>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeesContainer>
    </HomeContainer>
  )
}

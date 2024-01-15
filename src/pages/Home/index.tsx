import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import Hero from '../../assets/images/hero.svg'
import BgHero from '../../assets/images/hero-bg.svg'

import { ContainerHero, HeroContent, Heading } from './styles'
import { useTheme } from 'styled-components'

export function Home() {
  const theme = useTheme()
  return (
    <ContainerHero>
      <HeroContent>
        <Heading>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </Heading>

        <div id="grids">
          <div>
            <ShoppingCart
              size={32}
              weight="fill"
              color={theme.colors.background}
              style={{ backgroundColor: theme.colors.yellow.dark }}
            />
            <span>Compra simples e segura</span>
          </div>
          <div>
            <Package
              size={32}
              weight="fill"
              color={theme.colors.background}
              style={{ backgroundColor: theme.colors['base-text'] }}
            />
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <Timer
              size={32}
              weight="fill"
              color={theme.colors.background}
              style={{ backgroundColor: theme.colors.yellow.medium }}
            />
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <Coffee
              size={32}
              weight="fill"
              color={theme.colors.background}
              style={{ backgroundColor: theme.colors.purple.medium }}
            />
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
      </HeroContent>
      <div>
        <img
          src={Hero}
          alt="Embalagem de Café do Coffee Delivery"
          style={{ width: '100%' }}
        />
      </div>
      <img id="bg" src={BgHero} alt="" />
    </ContainerHero>
  )
}

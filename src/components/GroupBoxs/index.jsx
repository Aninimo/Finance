import { BoxCurrency } from '../BoxCurrency'
import { ArrowUp, ArrowDown, CurrencyDollar } from 'phosphor-react'
import { Container } from './styles'

export function GroupBoxs({ income, expense, total }){
  return(
    <Container>
      <BoxCurrency
        title="Entradas"
        Icon={ArrowUp}
        value={income}
      />

      <BoxCurrency
        title="Saidas"
        Icon={ArrowDown}
        value={expense}
      />

      <BoxCurrency
        title="Total"
        Icon={CurrencyDollar}
        value={total} />
    </Container>
  )
}

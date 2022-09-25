import { CurrencyContainer } from './styles'

export function BoxCurrency({ title, Icon, value }){
  return(
    <CurrencyContainer>
      <div>
        <h3>{title}</h3>
        <Icon/>
      </div>
      <p>{value}</p>
    </CurrencyContainer>
  )
}

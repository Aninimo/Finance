import styled from 'styled-components'

export const CurrencyContainer = styled.div`
  width: 85%;
  height: auto;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: var(--purple-500);
  color: #fff;
  box-shadow: 8px 8px 8px 7px rgba(0, 0, 0, 0.2);
  > div{
    display: flex;
    justify-content: space-between;
    margin-bottom: .5rem;
    svg{
      font-size: 1.5rem;
    }
  }
`

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  color: var(--text-color);
  margin-bottom: 3rem;
  button{
    display: flex;
    justify-content: center;
    padding: .5rem 1.2rem;
    background: var(--purple-500);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
  }
  
  h1{
    display: flex;
    align-items: center;
    gap: .5rem;
  }
`

import styled from 'styled-components'

export const ItemContainer = styled.div`
  width: 17rem;
  height: 5rem;
  padding: 1rem;
  background: var(--purple-200);
  margin-bottom: 1.5rem;
  border-radius: 8px;

  > div{
    display: flex;
    justify-content: space-between;
  }

  .line{
    margin-left: -15px;
    .red{
      position: absolute;
      height: 4.3rem;
      border:  2px solid var(--red-300);
      margin-top: -5rem;
      border-radius: 8px;
    }

    .green{
      position: absolute;
      height: 4.3rem;
      border: 2px solid var(--green-300);
      margin-top: -5rem;
      border-radius: 8px;
    }
  }

  @media screen and (min-width: 900px){
    width: 25rem;
  }
`

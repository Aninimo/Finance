import { Item } from '../Item'
import { TableContainer } from './styles'

export function TableItems({ itens, setItens }){
  function onDelete(ID){
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  }
  
  return(
    <TableContainer>
      <p>Foram cadastrados {itens.length} items</p>
      <div>
        {itens?.map((item, index) => (
          <Item key={index} item={item} onDelete={onDelete} />
        ))}
      </div>
    </TableContainer>
  )
}

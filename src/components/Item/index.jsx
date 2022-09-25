import { useState } from 'react'
import Modal from 'react-modal'
import { format } from 'date-fns'

import { ArrowUp, ArrowDown } from 'phosphor-react'
import { ItemContainer } from './styles'

export function Item({item, onDelete}){
  const [modalIsOpen, setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  return(
    <ItemContainer>
      <div onClick={openModal}>
        <h3>{item.title}</h3>
        <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.amount)}</p>
      </div>
      <p>{item.desc}</p>
      <div className='line'>
        {item.expense ? (
          <div className='red'/>
        ) : (
          <div className='green' />
        )}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className='modal-content'
          overlayClassName="modal-overlay">
          <ul>
            <li>
              <h3>Título</h3>
              {item.title}
            </li>
            
            <li>
              <h3>Valor</h3>
               {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.amount)}
            </li>

            <li>
              <h3>Descrição</h3>
              {item.desc}
            </li>

            <li>
              <h3>Data</h3>
              {format(new Date(item.date), 'dd/MM/yyyy')}
            </li>
          </ul>

          <button onClick={() => onDelete(item.id)}>Deletar</button>
        </Modal>
      </div>
    </ItemContainer>
  )
}

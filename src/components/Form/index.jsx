import { useState } from "react"
import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { TableItems } from '../TableItems'
import { FormContainer } from './styles'

export function Form({handleAdd, transactionsList, setTransactionsList}){  
  const [title,setTitle] = useState("")
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);
  const [date,setDate] = useState("")
  const [modalIsOpen, setIsOpen] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  function handleSave(){
    if (!title || !amount || !desc || !date) {
      toast.warn('Por favor preencha todos os campos')
      return
    } else if (amount < 1) {
      toast.warn("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
      title: title,
      date: date,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
    setTitle("");
    setDate("")
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  return(
    <> 
    <FormContainer
      onClick={openModal}>
      Adicionar
    </FormContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        className="modal-content">
        <input
          value={amount}
          type="number"
          placeholder='Valor'
          onChange={(e) => setAmount(e.target.value)}
          className='input'/>

        <input
          value={title}
          type='text'
          placeholder='Títle'
          onChange={(e) => setTitle(e.target.value)}
          className='input'/>

        <input
          value={desc}
          type='text'
          placeholder='descrição'
          onChange={(e) => setDesc(e.target.value)} 
          className='input'/>

        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className='input'/>

        <div className='chek'>
          <label htmlFor="rIncome">
            Entradas
          </label>
          <input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}/>
         </div>
        <br/>
        <div className='chek'>
          <label htmlFor="rExpenses">Saídas</label>
          <input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}/>     
        </div>
        
        <button onClick={handleSave}>Adicionar</button>
        <ToastContainer />
      </Modal>
      <TableItems itens={transactionsList} setItens={setTransactionsList} />
    </>
  )
}

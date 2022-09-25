import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  :root{
    --green-300: #9EF01A;
    --red-300: #FF002B;
    --purple-200: #9D4EDD;
    --purple-500: #7B2CBF;
    --purple-hover: #5A189A;
  }

  [data-theme="dark"] {
    --background-color: #EDF2F4;
    --background-color-light: #EDF2F4;
    --background-color-dark: #0B132B;
    --text-color: #f0f0f0;
    --text-color-secondary: #b3c5cd;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body{
    background: var(--background-color-dark);
    color: var(--text-color: #f0f0f0);
    transition: .5s;
  }

  ul{
    list-style: none;
  }

  li{
    margin-bottom: 1rem;
  }

  main{
    padding: 1rem;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content{
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #EDF2F4;
    padding: 10px;
    border-radius: 5px;


    .input{
      padding: .5rem 1rem;
      border-radius: .5rem;
      margin-bottom: 1rem;
    }

    .chek{
      display: flex;
      gap: .5rem;
    }

    button{
      margin-top: 1rem;
      padding: .5rem 3rem;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      background: var(--purple-500);
      color: #fff;
      transition: .5s;
    }
  }
`

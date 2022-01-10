/*-===================== React =====================-*/
import React from 'react'

/*-===================== React =====================-*/
import { BiSend as Send } from 'react-icons/bi'

const Form = () => {
  return (
    <form className="Form">
      <input
        id="name"
        type="text"
        className="Input"
        placeholder="Nome"
      />

      <input
        id="email"
        type="text"
        className="Input"
        placeholder="E-Mail"
      />

      <textarea
        id="message"
        className="TextArea"
        placeholder="Mensagem"
      />

      <button
        type="submit"
        className="Button"
        onClick={() => handleClick()}
      >
        Enviar <Send className="Icon" />
      </button>
    </form>
  )
}

export default Form
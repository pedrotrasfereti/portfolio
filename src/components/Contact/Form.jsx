/*-===================== React =====================-*/
import React, { useState } from 'react'

/*-===================== React =====================-*/
import { BiSend as Send } from 'react-icons/bi'

/*-===================== Services =====================-*/
import emailjs from 'emailjs-com';

const Form = () => {
  const defaultValue = {
    name: '',
    address: '',
    message: '',
  }

  const [values, setValues] = useState(defaultValue)

  const handleInput = ({ target }) => {
    const { name, value } = target

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))

    console.log(values)
  }

  const sendEmail = (evt) => {
    evt.preventDefault();

    emailjs.send(
      'service_wlf213b',
      'template_s64fl59',
      values,
      'user_uep8KlB8YFkDiihWTPbZq'
    )
      .then((result) => {
        console.log(result)
      }, (err) => {
        console.log(err)
      })

    setValues(defaultValue)
  };

  return (
    <form
      onSubmit={(evt) => sendEmail(evt)}
      className="Form"
    >
      <input
        name="name"
        type="text"
        className="Input"
        placeholder="Nome"
        value={values.name}
        onChange={(evt) => handleInput(evt)}
      />

      <input
        name="address"
        type="text"
        className="Input"
        placeholder="E-Mail"
        value={values.address}
        onChange={(evt) => handleInput(evt)}
      />

      <textarea
        name="message"
        className="TextArea"
        placeholder="Mensagem"
        value={values.message}
        onChange={(evt) => handleInput(evt)}
      />

      <button type="submit" className="Button">
        Enviar <Send className="Icon" />
      </button>
    </form>
  )
}

export default Form
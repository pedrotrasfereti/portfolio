/*-===================== React =====================-*/
import React, { useState } from 'react'

/*-===================== React =====================-*/
import { BiSend as Send } from 'react-icons/bi'

/*-===================== Services =====================-*/
import emailjs from 'emailjs-com';

const Form = () => {
  const initialValues = {
    name: '',
    address: '',
    message: '',
  }

  const [values, setValues] = useState(initialValues)

  const handleInput = ({ target }) => {
    const { name, value } = target

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const [status, setStatus] = useState({
    name: true,
    address: true,
    message: true
  })

  const handleBlur = ({ target }) => {
    const { name: inputName } = target
    const submitBtn = document.getElementById('form-submission-btn')

    const regex = {
      name: /([A-Za-z]){3,}/g,
      address: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: /([A-Za-z0-9])/g,
    }

    if (!regex[inputName].test(values[inputName])) {
      setStatus((prev) => ({
        ...prev,
        [inputName]: false,
      }))
    } else {
      setStatus((prev) => ({
        ...prev,
        [inputName]: true,
      }))
    }

    const nameStatus = regex.name.test(values.name)
    const addressStatus = regex.address.test(values.address)
    const messageStatus = regex.message.test(values.message)

    if (nameStatus && addressStatus && messageStatus) {
      submitBtn.disabled = false
    }
  }

  // And finally, send email
  const sendEmail = (evt) => {
    const submitBtn = document.getElementById('form-submission-btn')
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

    setValues(initialValues)
    submitBtn.innerHTML = 'Enviado!'
    submitBtn.disable = true
  };

  return (
    <form
      onSubmit={(evt) => sendEmail(evt)}
      className="Form"
    >
      <div className="Input--Container">
        <input
          name="name"
          type="text"
          className="Input"
          placeholder="Nome"
          value={values.name}
          onChange={(evt) => handleInput(evt)}
          onBlur={(evt) => handleBlur(evt)}
        />
        {
          !status.name && (
            <span className="Status">
              O nome deve conter pelo menos 3 caracteres
            </span>
          )
        }
      </div>

      <div className="Input--Container">
        <input
          name="address"
          type="email"
          className="Input"
          placeholder="E-Mail"
          value={values.address}
          onChange={(evt) => handleInput(evt)}
          onBlur={(evt) => handleBlur(evt)}
        />
        {
          !status.address && (
            <span className="Status">
              Escreva um e-mail valido
            </span>
          )
        }
      </div>

      <div className="Input--Container">
        <textarea
          name="message"
          className="TextArea"
          placeholder="Mensagem"
          value={values.message}
          onChange={(evt) => handleInput(evt)}
          onBlur={(evt) => handleBlur(evt)}
        />
        {
          !status.message && (
            <span className="Status">
              A mensagem não pode ficar vazia
            </span>
          )
        }
      </div>

      <button
        id="form-submission-btn"
        type="submit"
        className="Button"
        disabled
      >
        Enviar <Send className="Icon" />
      </button>
    </form>
  )
}

export default Form
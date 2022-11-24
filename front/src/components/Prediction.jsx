import React, { useState } from 'react'

import Fade from 'react-reveal/Fade'
import axios from 'axios'
import motivation from '../variables/phrases'
import ModalComponent from './ModalComponent'

export default function Prediction() {
  const [ text, setText ] = useState('')
  const [ res, setRes ] = useState('')
  const [ modalIsOpen, setIsOpenModal ] = useState(false);
  const [ phrase, setPhrase ] = useState('')
  const randomNumber = Math.floor(Math.random() * motivation.length)

  const setMotivationPhrase = () => setPhrase(motivation[randomNumber])
  const handleOnChange = event => setText(event.target.value)
  const closeModal = () => setIsOpenModal(false)
  const handleOnSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post('http://127.0.0.1:5000/prediction', { text: text })
    const result = response.data.status === 'OK' ? response.data.result : 'Bad request'
    setMotivationPhrase()
    setRes(result)
    setIsOpenModal(true)
    setText('')
  }

  return (
    <div className='container prediction' id='prediction'>
      <Fade up cascade duration={1000} distance={'30px'}>
        <form className='formulario' onSubmit={ handleOnSubmit }>
          <textarea className='textareac' cols="80" rows="13" onChange={ handleOnChange } value={ text } placeholder='Here your post...' ></textarea>
          <input className='boton2' type="submit" value='Submit' />
        </form>
      </Fade>
      <ModalComponent res={res} modalIsOpen={modalIsOpen} phrase={phrase} closeModal={closeModal}/>
    </div>
  )
}
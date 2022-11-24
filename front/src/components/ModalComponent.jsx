import React from 'react'
import Modal from 'react-modal';
import { AiOutlineHeart } from 'react-icons/ai'
import { TbHeartBroken } from 'react-icons/tb'

export default function ModalComponent({ modalIsOpen,  closeModal, res, phrase}) {
  return (
    <Modal className='modal' isOpen={ modalIsOpen } onRequestClose={ closeModal } contentLabel="Prediction modal" >
      <h1 className='modalText'>{ res }{ res === 'you are fine' ? <AiOutlineHeart className='icon' /> : <TbHeartBroken className='icon' /> }</h1>
      { res === 'you are fine' ? '' :  phrase }
    </Modal>
  )
}

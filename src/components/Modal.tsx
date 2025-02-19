import React from 'react'
import style from './Modal.module.css'

interface Props {
    children: React.ReactNode
}

const Modal = ({children}: Props) => {
  return (
    <div id="modal" >
        <div className={style.fade}></div>
        <div className={style.modal}>
            <h2>Editar Tarefa</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal
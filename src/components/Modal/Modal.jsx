import React from 'react'
import {createPortal} from 'react-dom'

const modalRoot = document.querySelector('#modal-root');

function Modal({children}) {
  return createPortal( (
    <div className="modal__bg-blur">
      <div className='modal'>
        {children}
      </div>
    </div>
  ), modalRoot)
}

export default Modal


// Областная полеклинника номер 1 улица волгоградская 185  вход номер 4 - 17:30 - 23 числа

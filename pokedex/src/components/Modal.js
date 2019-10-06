import React from 'react';
import ReactDOM from 'react-dom'

import './styles/Modal.css'

function Modal(props) {

  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal" onClick={props.onClose}>
      <div className="Modal__container">
        <div className="Modal__container__card">
          {props.children}
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
import React from 'react';
import ReactDOM from 'react-dom'

import './styles/Modal.css'

function Modal(props) {
  console.log(props)
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal" onClick={props.onClose}>
      <div className="Modal__container">
        <div className="Modal__container__card">
          <p>Half Damage</p>
          <p>{props.data.name}</p>
          <p>Double Damage</p>
          <div className="card__general">
            <p>Info</p>
            <p>Stats</p>
          </div>
          <p className="card__moves">Moves</p>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
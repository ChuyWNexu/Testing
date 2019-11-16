import React from 'react';
import ReactDOM from 'react-dom'

import './styles/Modal.css'

interface Modalprops {
  isOpen: boolean
  onClose: () => void
  data: data
}

interface data {
  [propName: string]: any
}

interface Damage {
  TypesNumber: number
  Half: []
  Double: []
  None: []
}

async function getData(url: string) {
  const data = await fetch(url).then(response => response.json());
  return data.damage_relations;
}

function Modal(props: Modalprops) {
  console.log(props)
  if (!props.isOpen) {
    return null;
  }

  var Damage: Damage = {
    TypesNumber: props.data.types.length,
    Half: [],
    Double: [],
    None: []
  }

  return ReactDOM.createPortal(
    <div className="Modal" >
      <div className="Modal__container">
        <button className="Modal__CloseButton" onClick={props.onClose}>X</button>
        <div className="Modal__container__card">
          <div className="Modal__container__HalfNoneDamage">
            <h4>Half Damage</h4>
          </div>
          <div className="card__container">
            <p className="card__container__name">{props.data.name}</p>
            <img src={props.data.sprites.front_default} />
          </div>
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
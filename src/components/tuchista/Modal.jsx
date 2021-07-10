import React from "react"
import {ModalWapper,ModalInner,ModalLeft,ModalImg} from "../../css/Modal.jsx"
import ModalRight from "./ModalRight"

function Modal(props) {
  return (
   <ModalWapper className={props.type} modal={props.modal} onClick={props.modalClose} value={props.value} type={props.type} kind={props.kind}>
    <ModalInner>
      <ModalLeft>
        <ModalImg src={props.cardImg}></ModalImg>
      </ModalLeft>
      <ModalRight title={props.title} date={props.date} txt={props.txt}/>
    </ModalInner>
   </ModalWapper>
  );
}

export default Modal
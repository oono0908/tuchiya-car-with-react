import React from "react"
import {CardWrapper,ImageWrapper,CardImage} from "../../css/TuchistaCard.jsx"
import Modal from "./Modal"

function TuchistaCard(props) {

  console.log(props.kind)
  return (
    <>
    <CardWrapper bg={props.bg} onClick={() => props.onClick(props.type)}>
      <ImageWrapper>
        <CardImage src={props.img}></CardImage>
      </ImageWrapper>
      <Modal modal={props.modal} cardImg={props.cardImg} title={props.title} date={props.date} txt={props.txt} modalClose={props.modalClose} value={props.value} type={props.type} kind={props.kind}/>
    </CardWrapper>
    </>
  );
}

export default TuchistaCard
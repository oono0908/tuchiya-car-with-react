import React from "react"
import {Txt,BtnWrapper,MoreBtn} from "../../css/Btn.jsx"

function Btn(props) {
  return (
    <BtnWrapper onClick={props.onClick} value={props.value}>
      <MoreBtn></MoreBtn>
      <Txt>もっとみる</Txt>
    </BtnWrapper>
  );
}

export default Btn
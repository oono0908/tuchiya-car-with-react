import React from "react"
import {ModalRightInner,Title,TitleLeft,TitleRight,TitleTxt,TitleDate,Txt} from "../../css/ModalRight.jsx"
import Icon from "../../image/tuchista/ico_tsuchiya_staff.svg"


function ModalRight(props) {
  const txt = props.txt

  const processedTxt = txt.split('<br>').map(function(line) {
    return (<p>{line}</p>);
　});

  return (
   <ModalRightInner>
     <Title>
       <TitleLeft src={Icon}>
       </TitleLeft>
       <TitleRight>
        <TitleTxt>{props.title}</TitleTxt>
        <TitleDate>{props.date}</TitleDate>
       </TitleRight>
     </Title>
     <Txt>{processedTxt}</Txt>
   </ModalRightInner>
  );
}

export default ModalRight
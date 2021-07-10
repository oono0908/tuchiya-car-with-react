import React from "react"
import {Bg,GlovalWapper,Inner,Title,Left} from "../css/Event"
import TitleImg from "../image/event/txt_eventhead.svg"
import EventImg from "../image/event/img_tsuchifesevent.jpg"
import Right from "../components/event/EventRight.jsx"
function Event() {
 
  return (
    <>
    <Bg></Bg>
     <GlovalWapper>
       <Title src={TitleImg}></Title>
      <Inner>
        <Left src={EventImg}></Left>
        <Right/>
      </Inner>
     </GlovalWapper>
     </>
  );
}

export default Event
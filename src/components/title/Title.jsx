import React from "react"
import {TitleWapper,TitleInner01,TitleInner02,TitleInner03} from "../../css/Title.jsx"

function Title(props) {

  const image = props.image
  const image01 = image[0].image01
  const image02 = image[1].image02
  const image03 = image[2].image03

  return (
    <TitleWapper>
      <TitleInner01 src={image01}></TitleInner01>
      <TitleInner02 src={image02}></TitleInner02>
      <TitleInner03 src={image03}></TitleInner03>
    </TitleWapper>
  );
}

export default Title
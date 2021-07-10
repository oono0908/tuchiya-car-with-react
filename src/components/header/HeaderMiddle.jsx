import React,{useState} from "react"
import TopOut from "../../image/header/header_menu01.png"
import TopOn from "../../image/header/header_menu01_on.png"
import EventOut from "../../image/header/header_menu02.png"
import EventOn from "../../image/header/header_menu02_on.png"
import TuchiyaOut from "../../image/header/header_menu03.png"
import TuchiyaOn from "../../image/header/header_menu03_on.png"
import Blank from "../../image/header/header_menu04_still.png"
import MovieOut from "../../image/header/header_menu05.png"
import MovieOn from "../../image/header/header_menu05_on.png"
import TuchistaOut from "../../image/header/header_menu06.png"
import TuchistaOn from "../../image/header/header_menu06_on.png"
import {WrapperMiddle} from "../../css/header.jsx"
import WrapperMiddleInner from "./headerMiddleInner"

const HeaderMiddle = () =>  {


  const [active01,setActive01] = useState(false)
  const [active02,setActive02] = useState(false)
  const [active03,setActive03] = useState(false)
  const [active05,setActive05] = useState(false)
  const [active06,setActive06] = useState(false)


  const mouseOn01 = () => {
    setActive01(true)
  }
  const mouseOut01 = () => {
    setActive01(false)
  }
  const mouseOn02 = () => {
    setActive02(true)
  }
  const mouseOut02 = () => {
    setActive02(false)
  }
  const mouseOn03 = () => {
    setActive03(true)
  }
  const mouseOut03 = () => {
    setActive03(false)
  }
  const mouseOn05 = () => {
    setActive05(true)
  }
  const mouseOut05 = () => {
    setActive05(false)
  }
  const mouseOn06 = () => {
    setActive06(true)
  }
  const mouseOut06 = () => {
    setActive06(false)
  }

  const Top = active01 ===true ? TopOn : TopOut
  const Event = active02 ===true ? EventOn : EventOut
  const Tuchiya = active03 ===true ? TuchiyaOn : TuchiyaOut
  const Movie = active05 ===true ? MovieOn : MovieOut
  const Tuchista = active06 ===true ? TuchistaOn : TuchistaOut

  const resourses = [
    {url: "/",enter: mouseOn01,leave:mouseOut01,src: Top},
    {url: "/event",enter: mouseOn02,leave:mouseOut02,src: Event},
    {url: "/tuchiya",enter: mouseOn03,leave:mouseOut03,src: Tuchiya},
    {url: "",enter: "",leave:"",src: Blank},
    {url: "/movie",enter: mouseOn05,leave:mouseOut05,src: Movie},
    {url: "/tuchista",enter: mouseOn06,leave:mouseOut06,src: Tuchista}
  ]
  
  return (
        <WrapperMiddle>
          {resourses.map((resouse) => (
            <WrapperMiddleInner
            key={resouse.src}
            url={resouse.url}
            mouseEnter={resouse.enter}
            mouseLeave={resouse.leave}
            image={resouse.src}
            key={resouse.enter}
            />
          ))}
        </WrapperMiddle>
  );
}

export default HeaderMiddle
import React,{useState} from "react"
import {HomeWrapper,HomeBackground,HomeCenterLogo,CenterInner,TimeDay,TimeSecond,TimeMinutes,TimeHour} from "../css/Home"
import useInterval from 'use-interval';
import Background from "../image/home/home_bg.jpg"
import HomeCenter from "../image/home/home_center_logo.png"



function Home() {

  const [date,setDay] = useState("")
  const [hour,setHour] = useState("")
  const [minutes,setMinutes] = useState("")
  const [second,setSecond] = useState("")

let datetime = '2020/11/11 0:0:0';
let from = new Date(datetime);

const passedDate = () => {
  let nowDate = new Date();
  let dnumNow = nowDate.getTime();
  let targetDate = new Date("2020","10","11"); 
  let dnumTarget = targetDate.getTime();
  let diffMSec = dnumTarget - dnumNow;
  let diffDays = diffMSec / ( 1000 * 60 * 60 * 24 );
  let showDays = Math.ceil( diffDays ); 

  setDay(showDays * -1)

}

const TimeChange = () => {

    let diff = new Date().getTime() - from.getTime();
    let elapsed = new Date(diff);
    let hour = elapsed.getUTCHours()
    let minutes = elapsed.getUTCMinutes()
    let second = elapsed.getUTCSeconds() 

    setHour(hour)
    setMinutes(minutes)
    setSecond(second)
}

useInterval(() => {
  TimeChange();
  passedDate();
},1000)

  return (
      <HomeWrapper>
        <HomeBackground src={Background}></HomeBackground>
        <HomeCenterLogo>
          <CenterInner src={HomeCenter}></CenterInner>
            <TimeDay>{date}</TimeDay>
            <TimeHour>{hour}</TimeHour>
            <TimeMinutes>{minutes}</TimeMinutes>
            <TimeSecond>{second}</TimeSecond>
        </HomeCenterLogo>
      </HomeWrapper>
  );
}

export default Home

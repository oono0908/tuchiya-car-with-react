import React,{useState,useCallback} from "react"
import {TuchistaWrapper,TuchistaContent,ContentWapper} from "../css/Tuchista.jsx"
import TuchistaCard from "../components/tuchista/TuchistaCard.jsx"
import BgOdd from "../image/tuchista/bg_blog_odd.png"
import BgEven from "../image/tuchista/bg_blog_even.png"
import CardImage from "../image/tuchista/tuchista01_img.jpg"
import Btn from "../components/tuchista/Btn.jsx"
import Title from "../components/title/Title.jsx"
import Title01 from "../image/title/ttl_photo01.png"
import Title02 from "../image/title/ttl_photo02.png"
import Title03 from "../image/title/ttl_photo03.png"

const txt01 = "【ツチフェス50th in茂原店 後日レポート⑤】<br>ツチフェス50th SNS企画DAY2の様子。<br><br>ツチフェス50th全6店舗凱旋を無事に幕を閉じることができました。<br>多くのお客様にご来店頂き日頃の感謝を伝えられたことを嬉しく思っております。<br>是非これからもツチヤ自動車をよろしくお願いします！"

const resouce01 = [
  {bg: BgOdd, img:CardImage, CardImg:CardImage, title:"ツチヤスタッフ", date: "2018/03/23", txt:txt01,type: "first"},
  {bg: BgEven, img: CardImage, CardImg:CardImage, title:"ツチヤスタッフ", date: "2018/03/23", txt:txt01,type: "second"},
  {bg: BgOdd, img: CardImage, CardImg:CardImage,title:"ツチヤスタッフ",date: "2018/03/23",txt:txt01,type: "third"},
  {bg: BgEven, img: CardImage, CardImg:CardImage,title:"ツチヤスタッフ",date: "2018/03/23",txt:txt01,type: "fouth"},
  {bg: BgOdd, img: CardImage, CardImg:CardImage,title:"ツチヤスタッフ",date: "2018/03/23",txt:txt01,type: "fifth"},
  {bg: BgEven, img: CardImage, CardImg:CardImage,title:"ツチヤスタッフ",date: "2018/03/23",txt:txt01,type: "sixth"},
  {bg: BgOdd, img: CardImage, CardImg:CardImage,title:"ツチヤスタッフ",date: "2018/03/23",txt:txt01,type: "seventh"},
  {bg: BgEven, img: CardImage, CardImg:CardImage,title:"ツチヤスタッフ",date: "2018/03/23",txt:txt01,type: "eightth"},
]

const titleImage = [
  {image01: Title01},
  {image02: Title02},
  {image03: Title03},
]

function Tuchista() {

  const [content1,setContent1] = useState(false)
  const [content2,setContent2] = useState(false)
  const [btn1, setBtn1] = useState(true)
  const [btn2, setBtn2] = useState(false)
  const [modal,setModal] = useState(false)
  const [kind,setKind] = useState("")

  const open1 = useCallback(() => {
    setContent1(true)
    setBtn1(!btn1)
    setBtn2(!btn2)
  },[btn1,btn2,setContent1])

  const open2 = useCallback(() => {
    setContent2(true)
    setBtn2(!btn2)
  },[btn2,setContent2])

  const openModal = useCallback((type) => {
    setModal(!modal)
    setKind(type)
  },[modal])

  const modalClose = useCallback(() => {
    setModal(!modal)
  },[modal])

  console.log(resouce01[0].CardImg)

  return (
    <TuchistaWrapper >
      <Title image={titleImage}/>
      <TuchistaContent>
        {resouce01.map((resouce,index) => (
          <TuchistaCard bg={resouce.bg} img={resouce.img} onClick={() => openModal(resouce.type)} modal={modal} cardImg={resouce.CardImg} title={resouce.title} date={resouce.date} txt={resouce.txt} modalClose={modalClose} key={(index * 2).toString()} value={"000" + (index + 1)} type={resouce.type} kind={kind}/>
        ))}
      </TuchistaContent>
      <Btn onClick={open1} value={btn1}/>
      <ContentWapper content={content1}>
        <TuchistaContent >
          {resouce01.map((resouce,index) => (
            <TuchistaCard bg={resouce.bg} img={resouce.img} onClick={() => openModal(resouce.type)} modal={modal} cardImg={resouce.CardImg} title={resouce.title} date={resouce.date} txt={resouce.txt} modalClose={modalClose} key={(index * 2).toString()} value={"000" + (index + 1)} type={resouce.type} kind={kind}/>
          ))}
        </TuchistaContent>
      </ContentWapper>
      <Btn onClick={open2} value={btn2} />
      <ContentWapper content={content2}>
        <TuchistaContent >
          {resouce01.map((resouce,index) => (
            <TuchistaCard bg={resouce.bg} img={resouce.img} onClick={() => openModal(resouce.type)} modal={modal} cardImg={resouce.CardImg} title={resouce.title} date={resouce.date} txt={resouce.txt} modalClose={modalClose} key={(index * 2).toString()} value={"000" + (index + 1)} type={resouce.type} kind={kind}/>
          ))}
        </TuchistaContent>
      </ContentWapper>
    </TuchistaWrapper>
  );
}

export default Tuchista
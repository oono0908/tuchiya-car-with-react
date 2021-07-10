import React from "react"
import {Title,Wrapper,Txt,ContentTxt,EventImg,MapImg,ToMap} from "../../css/EventRight.jsx"
import Schedule from "../../image/event/txt_schedule.png"
import Place from "../../image/event/txt_place.png"
import Time from "../../image/event/txt_time.png"
import Content from "../../image/event/txt_content.png"
import Event from "../../image/event/img_event01.png"
import Map from "../../image/event/txt_openmap.svg"

const contentTxt01 = "VRゲーム体験、セグウェイ体験、お子様のお仕事体験、<br> キッチンカーでのお食事・カフェメニューの提供、<br>保険無料診断会、リアルチョロQ試乗会etc."

  const contentTxt02 = contentTxt01.split('<br>').map(function(line) {
    return (<ContentTxt>{line}</ContentTxt>);
　});

const resouce = [
  {title: "開催日程",txt: "2019年11月16日（土）〜17日（日）",title:Schedule},
  {title: "開催店舗",txt: "ツチヤ自動車 茂原店",title:Place,map: Map,href:"https://goo.gl/maps/xAkrAeGN5SeHhRdt5"},
  {title: "開催時間",txt: "10:00〜17:00",title:Time},
  {title: "実施予定コンテンツ",txt: contentTxt02,title:Content,size: 300},
]
function Right() {
 
  return (
    <Wrapper>
      {resouce.map((resouce,index) => (
        <div key={index.toString()}>
          <Title src={resouce.title} size={resouce.size}></Title>
          <Txt map={resouce.map}>{resouce.txt}
            <ToMap href={resouce.href}>
              <MapImg src={resouce.map}></MapImg> 
            </ToMap>
          </Txt>
        </div>
      ))}
      <EventImg src={Event}></EventImg>
    </Wrapper>
  );
}

export default Right
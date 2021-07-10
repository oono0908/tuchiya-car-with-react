import React,{useState,useEffect} from "react"
import {CarLine} from "../components/history"
import {HistoryWrapper,HistoryScroll,HistoryItem,HistoryInner,Main,MainTitle,MainTxt,Img01,Img02,Img03,Img04,Img05,MainTxtWrapper,MainTxtRight,CarAria} from "../css/History"
import {Car} from "../css/CarLine"
import TxtTitle01 from "../image/history/txt_history01.png"
import History01 from "../image/history/img_history01.png"
import Year01 from "..//image/history/img_year01.png"
import Event0101 from "../image/history/img_history_event1-1.png"
import Event0102 from "../image/history/img_history_event1-2.png"
import Event0103 from "../image/history/img_history_event1-3.png"
import Bg01 from "../image/history/bg_history1.png"
import TxtTitle02 from "../image/history/txt_history02.png"
import History02 from "../image/history/img_history02.png"
import Year02 from "../image/history/img_year02.png"
import Event0201 from "../image/history/img_history_event2-1.png"
import Event0202 from "../image/history/img_history_event2-2.png"
import Event0203 from "../image/history/img_history_event2-3.png"
import Bg02 from "../image/history/bg_history2.png"
import TxtTitle03 from "../image/history/txt_history03.png"
import History03 from "../image/history/img_history03.png"
import Year03 from "../image/history/img_year03.png"
import Event0301 from "../image/history/img_history_event3-1.png"
import Event0302 from "../image/history/img_history_event3-2.png"
import Event0303 from "../image/history/img_history_event3-3.png"
import Bg03 from "../image/history/bg_history3.png"
import TxtTitle04 from "../image/history/txt_history04.png"
import History04 from "../image/history/img_history04.png"
import Year04 from "../image/history/img_year04.png"
import Event0401 from "../image/history/img_history_event4-1.png"
import Event0402 from "../image/history/img_history_event4-2.png"
import Event0403 from "../image/history/img_history_event4-3.png"
import Bg04 from "../image/history/bg_history04.png"
import TxtTitle05 from "../image/history/txt_history05.png"
import History05 from "../image/history/img_history05.png"
import Year05 from "../image/history/img_year05.png"
import Event0501 from "../image/history/img_history_event5-1.png"
import Event0502 from "../image/history/img_history_event5-2.png"
import Event0503 from "../image/history/img_history_event5-3.png"
import Bg05 from "../image/history/bg_history05.png"
import TxtTitle06 from "../image/history/txt_history06.png"
import History06 from "../image/history/img_history06.png"
import Year06 from "../image/history/img_year06.png"
import Bg06 from "../image/history/bg_history06.png"
import year1969 from "../image/history/txt_1969.svg"
import year1977 from "../image/history/txt_1977.svg"
import year1986 from "../image/history/txt_1986.svg"
import year1996 from "../image/history/txt_1996.svg"
import year2004 from "../image/history/txt_2004.svg"
import CarLogo from "../image/history/img_trabel.png"
import Title01 from "../image/title/ttl_history01.png"
import Title02 from "../image/title/ttl_history02.png"
import Title03 from "../image/title/ttl_history03.png"
import Title from "../components/title/Title.jsx"

function TuchiyaHistory() {

  const titleImage = [
    {image01: Title01},
    {image02: Title02},
    {image03: Title03},
  ]
  

  const [section01, setSection01] = useState(true)
  const [section02, setSection02] = useState(false)
  const [section03, setSection03] = useState(false)
  const [section04, setSection04] = useState(false)
  const [section05, setSection05] = useState(false)
  const [section06, setSection06] = useState(false)
  const [image, setImage] = useState("1969")
  const [position, setPosition] = useState(0)


  function onScroll() {
    
    const offset = window.pageYOffset


    const height = 700
    const blank = 500
    if( 0 <= offset && offset <= height * 2 ) {
      setSection01(true)
      setSection02(false)
      setImage("1969")
      setPosition(0)
    } else if (height * 2 + blank <= offset && offset <= height * 4 + blank){
      setSection01(false)
      setSection02(true)
      setSection03(false)
      setImage("1977")
      setPosition(20)
    } else if (height * 4 + blank * 2 <= offset && offset <= height * 6 + blank * 2){
      setSection02(false)
      setSection03(true)
      setSection04(false)
      setImage("1986")
      setPosition(40)
    } else if (height * 6 + blank * 3 <= offset && offset <= height * 8 + blank * 3){
      setSection03(false)
      setSection04(true)
      setSection05(false)
      setImage("1996")
      setPosition(60)
    } else if (height * 8 + blank * 4 <= offset && offset <= height * 10 + blank * 4){
      setSection04(false)
      setSection05(true)
      setSection06(false)
      setImage("2004")
      setPosition(80)
    } else if (height * 10 + blank * 5 <= offset && offset <= height * 12 + blank * 5){
      setSection05(false)
      setSection06(true)
      setPosition(98)
    } else {
      setSection01(false)
      setSection02(false)
      setSection03(false)
      setSection04(false)
      setSection05(false)
      setSection06(false)
    }
  

  
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  })
let txt02 = "長くお取引いただいたお客様がある日、<br>何らかの事情で、クルマに乗らなくなったそのとき。クルマの代わりに、どんな価値を提供できるだろう。<br>そんなことまで、ツチヤ自動車は考え始めています。<br>創業50周年を経て、100年企業になるために。"
  let txt2 = txt02.split('<br>').map(function(line) {
    return (<p>{line}</p>);
　});

let txt01 ="2014年 創業45年を超えたツチヤ自動車に、2016年初春、再び嬉しいニュースがもたらされた。社長 土屋正己の旭日双光章の叙勲である。2度目となる、勲章授与に、これまでツチヤ自動車を長きに渡り支えて下さったお客様、社員、お取引先、関係各所に対する深い感謝の念と、企業理念である「革新への挑戦」を新たに誓う機会となった。 <br>着実に事業の充実を図るツチヤ自動車も、創業からもうすぐ半世紀。この間に自動車販売を取り巻く環境は目まぐるしく変化してきた。クルマと人々との在り方が変わっていく中で、ツチヤ自動車の変革は今後も続いていく。<br>最終的に目指しているのは、地域に根差し、どんなことでもお客様の役に立てる企業になること。"
let txt1 = txt01.split('<br>').map(function(line) {
  return (<p>{line}</p>);
　});
  const resouce = [
    {
      value: section01,
      txt: "新車ディーラーでの中古車販売経験をもとに、土屋正己はついに独立を決意した。新車、中古車問わず、時代は自動車を欲していた。新車が好調に売れていくと、それに合わせて中古車も市場に出回る。ほおっておくとすぐにディーラーの駐車場が中古車で溢れてしまうような、そんな時代だった。1969年(昭和44年)、東京都葛飾区新小岩にて、ツチヤ自動車の前身となる土屋自動車販売が設立された。",
      src01: TxtTitle01,
      src02:History01,
      src03:Year01,
      src04:Event0101,
      src05: Event0102,
      src06:Event0103,
      style: "style01",
      bg: Bg01,
    },
    {
      value: section02,
      txt: "近畿地方大手中古車へ視察に行ったときのこと。土屋はそこで、無料でオイル交換する光景を目の当たりにし、驚きを隠せなかった。「なぜこんなことをやっているのか」そう尋ねる土屋に、中古車店の社長は一言「お客様との絆が太くなるから」。会社に戻ると土屋はすぐに同様のサービスを開始。良いものはすぐに取り入れるのが土屋のモットーだ。結果、お客様との接点が増え、長い信頼関係を育む一助となった。その後、現在に至るまでこのサービスは続いている。土屋の座右の銘『継続は力なり』を実践した格好だ。",
      src01: TxtTitle02,
      src02:History02,
      src03:Year02,
      src04:Event0201,
      src05: Event0202,
      src06:Event0203,
      style: "style02",
      bg: Bg02,
    },
    {
      value: section03,
      txt: "5店舗目となる東金への出店は、土屋にとって特別な想いが伴うはずだった。九十九里地域は、土屋が生まれ育った地元だったからである。中古車店はもちろん、飲食店などもまだ少ないエリアだったが、だからこそ100台以上の展示在庫を置くツチヤ自動車東金店は注目を集め、宣伝効果抜群であった。地元だけに親族・親戚はもちろん、友人・知人など多くの人が来店し、クルマを購入してくれた。そのことは土屋にとって故郷に錦を飾ることであり、また、独立して良かったとつくづく思える出来事となった。",
      src01: TxtTitle03,
      src02:History03,
      src03:Year03,
      src04:Event0301,
      src05: Event0302,
      src06:Event0303,
      style: "style03",
      bg: Bg03,
    },
    {
      value: section04,
      txt: "「業界の発展に寄与する」という土屋の想いは、JU東京の会長就任後に加速度を増していた。この年には、現行の封印受託業務を本格的にスタートさせる。「封印」とはナンバープレートを留めるボルトに被せたアルミ製のキャップのこと。しかるべき手続きを踏んでナンバープレートが取得されたことの証であり、不正を防ぐ目的のある「封印」は、従来は陸運支局まで車両を持ち込まなければ取り付けることができなかった。"　+ `</n>` + "かなりの時間と労力を費やすため、手続きの簡略化が望まれていたのである。その封印業務を受託する試みを1990年頃から段階的に続けてきたJU(日本中古自動車販売協会連合会)と、JU東京の会長である土屋は、ついにこの年、受託事業を本格開始させたのだった。これにより封印業務のスリム化が実現しただけでなく、自動車販売事業者にとっては代行手数料による新たな事業収益を得ることとなり、Win-Winの関係をもたらすこととなった。",
      src01: TxtTitle04,
      src02:History04,
      src03:Year04,
      src04:Event0401,
      src05: Event0402,
      src06:Event0403,
      style: "style04",
      bg: Bg04,
      font: 14,
    },
    {
      value: section05,
      txt:"業界の発展に尽くしてきた土屋に対して。数々の表彰がなされたのがこの頃だった。2002年には、関東運輸局長より陸運及び観光関係部外功労者表彰を、石原慎太郎東京都知事(当時)より東京都功労者表彰を受賞。2003年には、国土交通大臣より自動車関係功労者表彰を受賞し、翌年には環境指向型事業者東京運輸支局長表彰を受賞した。そして2004年、天皇陛下より黄綬褒章を授与される。長年の努力が報われる瞬間だった。",
      src01: TxtTitle05,
      src02:History05,
      src03:Year05,
      src04:Event0501,
      src05: Event0502,
      src06:Event0503,
      style: "style01",
      bg: Bg05,
    },
    {
      value: section06,
      txt: txt1,
      txt2:txt2,
      src01: TxtTitle06,
      src02:History06,
      src03:Year06,
      style: "style06",
      bg: Bg06,
      width:50,
    },
  ]

  const year = [
    {year: year1969,number: "1969",points: 10},
    {year: year1977,number: "1977",points: 10},
    {year: year1986,number: "1986",points: 10},
    {year: year1996,number: "1996",points: 10},
    {year: year2004,
     point:"point",
     flag: "flag",
     year2017: "year2017",
     number: "2004",
     points: 98
    }
  ]

 

  return (
    <div style={{marginTop: 100,height:"11000px"}}>
    <Title image={titleImage}/>
      <HistoryWrapper>
        <HistoryScroll></HistoryScroll>
        {resouce.map((value)  => (
          <HistoryItem className={value.value === true ? "active" : "none"} key={value.value}>
            <HistoryInner>
              <Main value={value.style} src={value.bg}>
                <MainTitle src={value.src01} width={value.width}></MainTitle>
                <MainTxtWrapper value={value.style}>
                  <MainTxt font={value.font} value={value.style}>
                    {value.txt}
                  </MainTxt>
                  <MainTxtRight>{value.txt2}</MainTxtRight>
                </MainTxtWrapper>
                <Img01 src={value.src02} value={value.style}></Img01>
                <Img02 src={value.src03} value={value.style} ></Img02>
                <Img03 src={value.src04} value={value.style}></Img03>
                <Img04 src={value.src05} value={value.style}></Img04>
                <Img05 src={value.src06} value={value.style}></Img05>
              </Main>
            </HistoryInner>
          </HistoryItem>
        ))}
        <CarAria>
            {year.map((year) => (
              <CarLine year={year.year} point={year.point} flag={year.flag} year2017={year.year2017} position={position} active={image} number={year.number} position={position} points={year.points} key={year.position}/>
            ))}
            <Car src={CarLogo} position={position}></Car>
        </CarAria>
      </HistoryWrapper>
      </div>
  );
}

export default TuchiyaHistory
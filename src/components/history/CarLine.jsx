import React from "react"
import {CarLineItem,CarLineCenter,CarFlag,CarFlagLast,Year,YearLast,CarChange} from "../../css/CarLine"
import Flag from "../../image/history/img_position.png"
import Year2017 from "../../image/history/txt_2017.svg"

const CarLine = (props) =>  {
console.log(props.year2017)
  return (
      <CarLineItem point={props.point}>
        <CarLineCenter></CarLineCenter>
        <CarChange active={props.active} className={props.number} number={props.number} position={props.position}>
          <CarFlag src={Flag} sytle={props.style} point={props.points}  position={props.position}></CarFlag>
          <Year src={props.year} sytle={props.style}  point={props.points}  position={props.position}></Year>
          <CarFlagLast src={Flag} position={props.position} sytle={props.style}></CarFlagLast>
        <YearLast src={Year2017} position={props.position} sytle={props.style}></YearLast>
        </CarChange>
      </CarLineItem>

  );
}

export default CarLine
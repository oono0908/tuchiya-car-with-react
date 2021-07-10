import React from "react"
import {Item,Menu} from "../../css/header.jsx"
import {useHistory} from "react-router-dom"


const WrapperMiddleInner = (props) =>  {

const history = useHistory();
const url = props.url
const mouseOn = props.mouseEnter
const mouseOut = props.mouseLeave
const image = props.image


  return (
        <Item onClick={() => history.push(url)}>
          <Menu onMouseEnter={mouseOn}
                onMouseLeave={mouseOut}
                src={image}>
          </Menu>
        </Item>
  );
}

export default WrapperMiddleInner
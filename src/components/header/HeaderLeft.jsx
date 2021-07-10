import React from "react"
import Handle from "../../image/header/logo_handle_white.svg"
import Title from "../../image/header/logo_white.svg"
import {WrapperLeft,Left,Right} from "../../css/header.jsx"
import {useHistory} from "react-router-dom"


const HeaderLeft = () =>  {

const history = useHistory();

  return (
        <WrapperLeft onClick={() => history.push("/")}>
          <Left src={Handle}></Left>
          <Right src={Title}></Right>
        </WrapperLeft>
  );
}

export default HeaderLeft
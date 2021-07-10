import React from "react"
import {Header} from "../css/header"
import {HeaderLeft,HeaderMiddle,HeaderRight} from "../components/header"

function Head() {
  return (
      <Header>
        <HeaderLeft></HeaderLeft>
        <HeaderMiddle></HeaderMiddle>
        <HeaderRight></HeaderRight>
      </Header>
  );
}

export default Head

import React from "react"
import Blog from "../../image/header/icon_blog_w.png"
import Facebook from "../../image/header/icon_facebook_w.png"
import Insta from "../../image/header/icon_insta_w.png"
import Twitter from "../../image/header/icon_twitter_w.png"
import Mypage from "../../image/header/icon_mypage_w.png"
import {WrapperRight,LogoItem,LogoMenu} from "../../css/header.jsx"

const HeaderRight = () =>  {

  return (
        <WrapperRight>
          <LogoItem href="https://ameblo.jp/tsuchiya-car/" target="_black">
            <LogoMenu src={Blog}></LogoMenu>
          </LogoItem>
          <LogoItem href="https://afterservice.jp/?code=KT" target="_black">
            <LogoMenu src={Facebook}></LogoMenu>
          </LogoItem>
          <LogoItem href="https://twitter.com/tsuchiya_cars" target="_black">
            <LogoMenu src={Insta}></LogoMenu>
          </LogoItem>
          <LogoItem href="https://www.facebook.com/tsuchiya.car" target="_black">
            <LogoMenu src={Twitter}></LogoMenu>
          </LogoItem>
          <LogoItem href="https://www.instagram.com/tsuchiya_cars/?hl=ja" target="_black">
            <LogoMenu src={Mypage}></LogoMenu>
          </LogoItem>
        </WrapperRight>
  );
}

export default HeaderRight
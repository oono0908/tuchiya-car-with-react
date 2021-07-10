import styled,{css} from "styled-components"

const FrameCss = css`
   content:"";
  position:absolute;
  width: 50px;
  height: 50px;
`

export const MovieWrapper = styled.div`
              width: 1080px;
              margin: 0 auto;
              height: 100vh;
              position: relative;

              `
export const Yutube = styled.div`
              width: 1080px;
              position: absolute;
              top: 45%;
              transform: translateY(-50%);
              `
export const Frame1 = styled.div`
              position:relative;
              width: 100%;
              height: 100%;
              &::before{
                ${FrameCss}
                top:-20px;
                left: -20px;
                border-top: 2px solid black;
                border-left: 2px solid black;
              }
              &::after{
                ${FrameCss}
                top:-20px;
                right: -20px;
                border-top: 2px solid black;
                border-right: 2px solid black;
              }
              `
export const Frame2 = styled.div`
              position:relative;
              width: 100%;
              height: 100%;
              &::before{
                ${FrameCss}
                bottom:-20px;
                left: -20px;
                border-bottom: 2px solid black;
                border-left: 2px solid black;
              }
              &::after{
                ${FrameCss}
                bottom:-20px;
                right: -20px;
                border-bottom: 2px solid black;
                border-right: 2px solid black;
              }
              `
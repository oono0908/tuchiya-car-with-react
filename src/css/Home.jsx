import styled,{css} from "styled-components"

const Time = css`
   font-weight: bold;
    color: white;
    font-size:1.5vw;
    position:absolute;
    bottom:16px;
    margin-bottom: 1%;
`

export const HomeWrapper = styled.div`
              width: 100vw;
              position:relative;
              `
export const HomeBackground = styled.img`
              width: 100%;
              height: auto;
              margin-top: 90px;
              `
export const HomeCenterLogo = styled.div`
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%,-50%);
              width: 20%;
              `
export const CenterInner = styled.img`
              width: 100%;
              height: 100%;
              position: relative;
              `
export const TimeMinutes = styled.p`
                ${Time}
                right: 5%;
              `
export const TimeSecond = styled.p`
                ${Time}
                right:32%;
              `
export const TimeHour = styled.p`
               ${Time}
               left: 31%;
              `
export const TimeDay = styled.p`
                  ${Time}
                  left:5%;
                `

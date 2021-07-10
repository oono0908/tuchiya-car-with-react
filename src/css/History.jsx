import styled, { keyframes,css } from 'styled-components';
export const HistoryWrapper = styled.div`
              width: 100vw;
              height: 100vh;
              position: relative;
              `
export const HistoryScroll = styled.div`
              width: 100vw;
              height: 11000px;
              `
export const HistoryItem = styled.section`
              width: 100%;
              max-width: 1080px;
              height: 100vh;
              position:fixed;
              top:5%;
              left: 50%;
              transform: translateX(-50%);
              z-index:-100;
              transition: 0.5s;
              `
export const HistoryInner = styled.div`
              width: 100%;
              height: 100%;
              position: relative;
              `
export const Main = styled.div`
              width:630px;
              height: 430px;
              position: absolute;
              transform: translateY(-50%);
              background-size:contain;
              background-repeat:no-repeat;
              box-sizing:border-box;
              padding:60px 80px;
              ${props => props.value == "style01" && css`
              background-image: url(${props => props.src});
              top: 50%;
              left: 10%;
              `}
              ${props => props.value == "style02" && css`
              background-image: url(${props => props.src});
              top: 50%;
              left: 40%;
              `}
              ${props => props.value == "style03" && css`
              background-image: url(${props => props.src});
              top: 50%;
              left: 10%;
              `}
              ${props => props.value == "style04" && css`
              background-image: url(${props => props.src});
              top: 60%;
              left: 35%;
              width: 630px;
              height: 530px;
              background-size:contain;
              `}
              ${props => props.value == "style06" && css`
              background-image: url(${props => props.src});
              top: 60%;
              left: 10%;
              width:900px;
              height:600px;
              `}
              `
export const MainTitle = styled.img`
              width: 80%;
              width:${(props) => props.width}%;
              `
export const MainTxt = styled.p `
              line-height:1.9;
              margin-top: 10px;
              font-size:${(props) => props.font}px;
              ${props => props.value == "style06" && css`
              width:60%;
              `}
              `
export const Img01 = styled.img`
              position: absolute;
              ${props => props.value == "style01" && css`
              top: 76%;
              left:85%;
              `}
              ${props => props.value == "style02" && css`
              top: -10%;
              left:-35%;
              `}
              ${props => props.value == "style03" && css`
              top: -10%;
              left: 87%;
              `}
              ${props => props.value == "style04" && css`
              top: 30%;
              left: -45%;
              `}
              ${props => props.value == "style06" && css`
              top: -5%;
              left: 54%;
              `}
              `
export const Img02 = styled.img`
              position: absolute;
              ${props => props.value == "style01" && css`
              top: 65%;
              left:90%;
              `}
              ${props => props.value == "style02" && css`
              left: -40%;
              top:40%;
              `}
              ${props => props.value == "style03" && css`
              left: 98%;
              top:40%;
              `}
              ${props => props.value == "style04" && css`
              left: -40%;
              top:20%;
              `}
              ${props => props.value == "style06" && css`
              left: 68%;
              top:-10%;
              `}
              `
export const Img03 = styled.img`
              position: absolute;
              ${props => props.value == "style01" && css`
              top: -10%;
              left:100%;
              `}
              ${props => props.value == "style02" && css`
              top: 40%;
              left:-60%;
              `}
              ${props => props.value == "style03" && css`
              top: 40%;
              left:140%;
              `}
              ${props => props.value == "style04" && css`
              top: -10%;
              left:-55%;
              `}
              `
export const Img04 = styled.img`
              position: absolute;
              ${props => props.value == "style01" && css`
              top: 10%;
              left: 120%;
              `}
              ${props => props.value == "style02" && css`
              top: 70%;
              left: -60%;
              `}
              ${props => props.value == "style03" && css`
              top: 63%;
              left: 130%;
              `}
              ${props => props.value == "style04" && css`
              top: -20%;
              left: -35%;
              `}
              `
export const Img05 = styled.img`
              position: absolute;
              ${props => props.value == "style01" && css`
              top: 40%;
              left:135%;
              `}
              ${props => props.value == "style02" && css`
              top: 83%;
              left:-30%;
              `}
              ${props => props.value == "style03" && css`
              top: 83%;
              left:110%;
              `}
              ${props => props.value == "style04" && css`
              top: -6%;
              left:-20%;
              `}
              `
export const MainTxtWrapper = styled.div`
               ${props => props.value == "style06" && css`
              display: flex;
              width: 100%;
              font-size:15px;
              text-align: justify;　　
              `}
              `
export const MainTxtRight = styled.p`
              width: 40%;
              line-height:1.5;
              margin-top:140px;
              margin-left:20px;
              `
export const CarAria = styled.div`
              width: 800px;
              height: 80px;
              position: fixed;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              display:flex;
              `
export const CarFlag = styled.img`
                width: 15px;
                position: absolute;
              `
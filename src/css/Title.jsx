import styled,{css,keyframes} from "styled-components"
const common = css`
      width: 100%;
      position:absolute;
      top: 0;
      left: 0;
      /* animation-timing-function: ease-in-out; */
      `
const fadeIn01 = keyframes`
0% {
    opacity: 1;
}
32% {
    opacity: 1;
}
33% {
    opacity: 0;
}
100%{
  opacity: 0;
}
`

const fadeIn02 = keyframes`
0%{
  opacity: 0;
}
33% {
    opacity: 0;
}
34% {
    opacity: 1;
}
65% {
    opacity: 1;
}
66% {
    opacity: 0;
}
100%{
   opacity: 0;
}
`
const fadeIn03 = keyframes`
0%{
  opacity: 0;
}
65%{
  opacity: 0;
}
66%{
  opacity: 1;
}
99%{
  opacity: 1
}
100%{
   opacity: 0;
}
`


export const TitleWapper = styled.div`
              width: 100%;
              position:relative;
              height: 100px;
              `
export const TitleInner01 = styled.img`
              ${common}
              display: block;
              animation: ${fadeIn01} 1s linear infinite;
              `
export const TitleInner02 = styled.img`
              ${common}
              display: block;
              animation: ${fadeIn02} 1s linear infinite;
              `
export const TitleInner03 = styled.img`
              ${common}
              display: block;
              animation: ${fadeIn03} 1s linear infinite;
              `
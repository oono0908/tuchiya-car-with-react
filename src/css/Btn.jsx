import styled, { keyframes,css } from 'styled-components';

export const BtnWrapper = styled.div`
              
              ${props => props.value == false && css`
                display: none;
              `}
              ${props => props.value == true && css`
                display: block;
              `}
              `
export const MoreBtn = styled.div`
width: 100%;
height:40px;
border-top:2px solid yellowgreen;
margin-top: 30px;
position:relative;
overflow:hidden;
&::before{
  content:"";
  position:absolute;
  width:50px;
  height: 100px;
  border-radius:50px;
  background-color: yellowgreen;
  top:-70px;
  left: 50%;
  transform: translateX(-50%)
}
&::after{
  content:"";
  position:absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 6px 0;
  border-color: #fff transparent transparent;
  top:10px;
  left: 50%;
  transform: translateX(-50%);
}
`
export const Txt = styled.p`
              color:yellowgreen;
              width: 100%;
              text-align: center;
              margin-top: 5px;
              `
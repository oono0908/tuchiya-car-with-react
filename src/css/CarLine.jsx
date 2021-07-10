import styled, { keyframes,css } from 'styled-components';

const Point = css`
   position: absolute;
  content: "";
  top: 50%;
  transform:translateY(-50%);
  width: 15px;
  height: 15px;
  background-color:#b8d200;
  border-radius:50%;
`
export const CarLineItemWapper = styled.div`
                width: 20%;
                height: 100%;
                position:relative;
              `
export const CarLineCenter = styled.div`
                width: 100%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                height:3px;
                background-color:#b8d200;

              `
export const CarLineItem = styled.li`  
                width: 20%;
                height: 100%;
                position: relative;
                list-style:none;
                &::before {
                  ${Point}
                  left:0;
                }
                ${props => props.point == "point" && css`
                &::after {
                  ${Point}
                  right: 0;
                }
                `}
              `
export const CarFlag = styled.img`
                width: 15px;
                position: absolute;
                top:-40%;
                left: 0;
                ${props => props.position === props.point && css`
                  opacity: 0;
                `}
              `
export const CarFlagLast = styled.img`
                opacity:0;
                width: 15px;
                position: absolute;
                top:-40%;
                right: 0;
                
                ${props => props.position === 98 && css`
                  opacity: 1;
                `}
              `
export const Year = styled.img`
                width: 40px;
                position: absolute;
                top:-40%;
                left: 15%;
                ${props => props.position === props.point && css`
                  opacity: 0;
                `}
              `
export const YearLast = styled.img`
              width: 40px;
              position: absolute;
              top:-40%;
              right: -35%;
              opacity: 0;
              ${props => props.position === 98 && css`
                  opacity: 1;
                `}
              `
export const CarChange = styled.div`
                opacity: 0;
                ${props => props.active === props.number && css`
                  opacity: 1;
                `}
              `
export const Car = styled.img`
                width: 40px;
                position: absolute;
                top: -5%;
                left: ${props => props.position}%;
                transition: 0.3s;
              `
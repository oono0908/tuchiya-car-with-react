import styled, { keyframes,css } from 'styled-components';

export const Wrapper = styled.div`
              width: 50%;
              box-sizing:border-box;
              margin-left: 30px;
              `
export const Title = styled.img`
              width: 200px;
              margin-top: 25px;
              ${props => props.size && css`
                width: ${props.size}px;
              `}
              `
export const Txt = styled.p`
              margin-top: 20px;
              font-weight: bold;
              line-height:　1.9;
              font-size:20px;
              ${props => props.map && css`
              position:relative;
               `}
              `
export const MapImg = styled.img`
                width: 100%;
              ` 
export const ContentTxt = styled.p`
               line-height:1.9;
              `
export const EventImg = styled.img`
                display: block;
                margin-top: 60px;
                width: 600px;
              `
export const ToMap = styled.a`
                width: 130px;
                position: absolute;
                left: 70%;
                top: 50%;
                transform: translateY(-50%);
              `
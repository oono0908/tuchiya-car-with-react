import styled, { css } from 'styled-components';

const common = css`
   display: block;
   background-color: rgba(0, 0, 0, 0.5);
`

export const ModalWapper = styled.div.attrs(props => ({
  className: props.className
}))`
              width: 100vw;
              height: 100vh;
              position: fixed;
              top: 0;
              left: 0;
              display: none;
              z-index:200;
              ${props => props.kind === "first" && props.modal === true && css`
                &.first {
                ${common}
                }
              `}
              ${props => props.kind === "second" && props.modal === true && css`
                &.second {
                  ${common}
                }
              `}
              ${props => props.kind === "third" && props.modal === true && css`
                &.third {
                ${common}
                }
              `}
              ${props => props.kind === "fouth" && props.modal === true && css`
                &.fouth {
                ${common}
                }
              `}
              ${props => props.kind === "fifth" && props.modal === true && css`
                &.fifth {
                ${common}
                }
              `}
              ${props => props.kind === "sixth" && props.modal === true && css`
                &.sixth {
                ${common}
                }
              `}
              ${props => props.kind === "seventh" && props.modal === true && css`
                &.seventh {
                ${common}
                }
              `}
              ${props => props.kind === "eightth" && props.modal === true && css`
                &.eightth {
                ${common}
                }
              `}
              `
export const ModalInner = styled.div`
              width: 900px;
              height: 500px;
              background-color: #dbe87f;
              position: absolute;
              top: 50%;
              left: 50%;
              z-index:300;
              transform: translate(-50%,-50%);
              display: flex;
              box-sizing:border-box;
              padding: 30px 40px;
              `
export const ModalLeft = styled.div`
              width: 65%;
              display: flex;
              `
export const ModalImg = styled.img`
              width: 65%;
              height: auto;
              margin: 0 auto;
              display: block;
              `
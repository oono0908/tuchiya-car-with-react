import styled, { keyframes,css } from 'styled-components';

const List = css`
  height: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content:space-between;
`

export const Header = styled.header`
              background-color: #b8d200;
              height: 90px;
              display:flex;
              justify-content: space-bettween;
              position:fixed;
              top: 0;
              width: 100vw;
              z-index:100;
              `
export const WrapperLeft = styled.div`
              display:flex;
              width: 20%;
              height: 100%;
              `
const rotate = keyframes`
  from {
    transform: translateX(-50%) rotate(0deg);
  }

  to {
    transform: translateX(-50%) rotate(360deg);
  }
`;

export const Left = styled.img`
              width: 20%;
              animation: ${rotate} 5s linear infinite;
              `
export const Right = styled.img`
              width: 60%;
              margin-left: -20px;
              `
export const WrapperMiddle = styled.ul`
              width: 60%;
              ${List}
              `
export const Item = styled.li`
              width:10%;
              `
export const Menu = styled.img`
              width: 100%;
              `
export const WrapperRight = styled.ul`
              width: 15%;
              margin: 0 0 0 auto;
              ${List}
              `
export const LogoItem = styled.a`
              width: 17%;
              display:block;
              &:first-child{
                margin-right: 8px;
              }
              `
export const LogoMenu = styled.img`
              height:1.5vw;
              `
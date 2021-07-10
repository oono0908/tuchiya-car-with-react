import styled, { keyframes,css } from 'styled-components';

export const CardWrapper = styled.div`
              width: 230px;
              height: 230px;
              position: relative;
              box-sizing:border-box;
              margin-top: 20px;
              ${props => props.bg && css`
              background-image: url(${props.bg});
              background-size: cover;
              `}
              `
export const ImageWrapper = styled.div`
              width: 170px;
              height: 130px;
              display: block;
              position: absolute;
              top: 45%;
              left: 50%;
              transform: translate(-50%,-50%);
              overflow:hidden;
              `
export const CardImage = styled.img`
              width: 120%;
              transform: translate(-10%,-15%);
              `
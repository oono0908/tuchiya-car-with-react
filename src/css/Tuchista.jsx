import styled, { keyframes,css } from 'styled-components';

export const TuchistaWrapper = styled.div`
              width: 1080px;
              margin:100px auto 0;
              `
export const TuchistaContent = styled.div`
              display: flex;
              justify-content:space-between;
              flex-wrap:wrap;
              width: 100%;
              `
export const ContentWapper = styled.div`
              display: none;
              box-sizing:border-box;
              ${props => props.content === true && css`
                display: block;
              `}
              `
import styled, { keyframes,css } from 'styled-components';
import EventBg from "../image/event/bg_eventdetail.png"

export const Bg = styled.div`
              width: 100vw;
              height: 100vh;
              background-image: url(${EventBg});
              background-size: cover;
              position: fixed;
              top: 0;
              left: 0;
              z-index: -100;
              `
export const GlovalWapper = styled.div`
              width: 1200px;
              max-Width: 1200px;
              margin: 0 auto;
              margin-top: 90px;
              `
export const Inner = styled.div`
                width: 100%;
                height: auto;
                display: flex;
                margin-top: 30px;
              `
export const Title = styled.img`
              width: 100%;
              margin-top: 80px;
              `
export const Left = styled.img`
              width: 50%;
              display: block;
              `

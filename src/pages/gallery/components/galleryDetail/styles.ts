import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const fadeUp = keyframes`
    0% {
        opacity : 0;
    }

    100% {
        opacity : 1;
    }
`;

export const Container = styled.div<{ frameBg?: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 90vh;
  animation: ${fadeUp} 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  z-index: 20;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.frameBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter : blur(8px);
  }

  @media (max-width : 1024px) {
    height : 70vh;
  }
`;

export const Overlay = styled.div`
  position : absolute;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
  background-color: rgba(255, 255, 255, 0.44);
  z-index: 21;
`;

export const Frame = styled(motion.div)`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  z-index : 21;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }

  @media (max-width : 1024px) {
      display : none;
  }
`;

export const DetailContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items : end;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
  z-index : 22;

  p {
    width: 100%;
    height: auto;
    word-break: break-word;
    white-space: normal;
    overflow: visible;
  }

  @media (max-width: 1024px) {
    width : 100%;
  }
`;

export const DetailText = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap : 20px;
`;

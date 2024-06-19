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
  z-index: 10;
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
    background-position: center;
    filter: blur(20px);
    z-index: -1;
  }
`;

export const Frame = styled(motion.div)`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index : 12;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0;
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
  z-index : 12;

  p {
    width: 100%;
    height: auto;
    word-break: break-word;
    white-space: normal;
    overflow: visible;
  }
`;

export const DetailText = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap : 20px;
`;

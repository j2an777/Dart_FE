import { Icon } from '@/components';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: relative;
  width: fit-content;
  height: fit-content;
  transition: all 0.3s ease;
  cursor: pointer;
  :hover {
  }
  :active {
    transform: scale(1.1);
  }
`;

export const PostArrow = styled(Icon)`
  position: absolute;
  animation: none;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const BackgroundImage = styled.img`
  z-index: var(--middle-zindex);
  width: 120px;
  height: 120px;
  pointer-events: none;
`;

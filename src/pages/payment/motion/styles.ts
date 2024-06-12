import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  margin: 40px auto;
  max-width: 500px;
`;

export const Card = styled(motion.div)`
  position: relative;
  font-size: 164px;
  width: 330px;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.gray50};
  clip-path: polygon(
    0 3%,
    5% 0,
    10% 3%,
    15% 0,
    20% 3%,
    25% 0,
    30% 3%,
    35% 0,
    40% 3%,
    45% 0,
    50% 3%,
    55% 0,
    60% 3%,
    65% 0,
    70% 3%,
    75% 0,
    80% 3%,
    85% 0,
    90% 3%,
    95% 0,
    100% 3%,
    100% 100%,
    0 100%
  );
  transform-origin: 10% 70%;
`;

export const CardContainer = styled(motion.div)`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20px;
  margin-bottom: -120px;
`;

export const Splash = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  clip-path: path(
    'M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z'
  );
  background: linear-gradient(306deg, #606060, #000000);
`;

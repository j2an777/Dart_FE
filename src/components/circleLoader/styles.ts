import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const CircleLoader = styled(motion.span)`
  width: 3rem;
  height: 3rem;
  border: 0.5rem solid #e9e9e9;
  border-top: 0.5rem solid #3498db;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 45%;
`;

import { buttonActiveMap, buttonSizeMap } from '@/styles/button';
import { colors } from '@/styles/colorPalette';
import { bolderMap } from '@/styles/typography';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { containerQuery } from '@/styles/breakpoints';
import { Breakpoints } from '../../fail/styles';

export const Container = styled.div`
  position: relative;
  margin: 20px auto;
  max-width: 560px;
  width: 100%;
  height: 100vw;
`;

export const Card = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;

  ${containerQuery({
    containerName: 'payment-done',
    styles: `
      position: none;
      width: 80%;
    `,
    breakpoints: Breakpoints.mobile,
  })}
`;

export const CardContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 10px;
  margin-bottom: -220px;
  overflow: hidden;
`;

export const Splash = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 90px;
  border-radius: 50px;
  background: linear-gradient(180deg, #000000, #333333);
`;

export const Button = styled.button`
  position: absolute;
  right: 50%;
  top: 800px;
  transform: translateX(50%);
  ${buttonSizeMap.mdlg}
  ${bolderMap.bold}
  width: 335px;
  height: 70px;
  border: 2px solid ${colors.black};

  &:hover {
    ${buttonActiveMap.rectangleBlack}
  }

  ${containerQuery({
    containerName: 'payment-done',
    styles: `
      top: auto;
      bottom: 25%;  
      width: 80%;
    `,
    breakpoints: Breakpoints.mobile,
  })}
`;

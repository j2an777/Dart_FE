import { Icon } from '@/components';
import { containerQuery } from '@/styles/breakpoints';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { MainPageQuerySize } from '../../styles';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: fit-content;
  border-top: 1px solid ${colors.gray600};
`;

export const TitleBox = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  justify-content: space-between;
`;

export const PriceBox = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

export const PriceButtonBlock = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  gap: 15px;
`;

export const filterIcon = styled(Icon)`
  visibility: hidden;

  ${containerQuery({
    breakpoints: MainPageQuerySize.disableFilter,
    containerName: 'main-list',
    styles: `
    visibility: visible;
    position: absolute;
    top: -40px;
  `,
  })}
`;

export const FilterBox = styled.div`
  ${LayoutMap.displayFlex}
  gap: 30px;
  flex-direction: column;
  padding: 35px 20px 0 20px;

  min-width: 320px;
  position: relative;
  transition: all 0.25s ease;

  ${containerQuery({
    breakpoints: MainPageQuerySize.disableFilter,
    containerName: 'main-list',
    styles: `
    display: none;
  `,
  })}
`;

export const ModalContainer = styled(motion.div)`
  display: flex;

  width: fit-content;
  height: 100%;
  background-color: ${colors.white};
`;

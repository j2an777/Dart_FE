import { Icon } from '@/components';
import { containerQuery } from '@/styles/breakpoints';
import { colors } from '@/styles/colorPalette';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { eventPageQuerySize } from '../../styles';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 520px;
  height: 330px;
  padding: 10px;

  .swiper-pagination-bullet-active {
    background-color: ${colors.black};
  }

  ${containerQuery({
    breakpoints: eventPageQuerySize.priorityBox,
    containerName: 'priority-box',
    styles: `
      width: 420px;
      height: 260px;
    `,
  })}
  ${containerQuery({
    breakpoints: eventPageQuerySize.priorityBoxMobile,
    containerName: 'priority-box',
    styles: `
      width: 360px;
      height: 240px;
    `,
  })}
`;

export const DirectionButton = styled(Icon)<{ isNext?: boolean }>`
  position: absolute;

  cursor: pointer;
  align-self: center;
  ${({ isNext = false }) =>
    isNext
      ? css`
          right: 0;
          transform: rotate(180deg) translate(-100%, 50%);
          :hover {
            transform: rotate(180deg) translate(-100%, 50%) scale(1.05);
            cursor: pointer;
          }
          :active {
            transform: rotate(180deg) translate(-100%, 50%) scale(0.95);
          }
        `
      : css`
          left: 0;
          transform: translate(-100%, -50%);
          :hover {
            transform: translate(-100%, -50%) scale(1.05);
            cursor: pointer;
          }
          :active {
            transform: translate(-100%, -50%) scale(0.95);
          }
        `}

  ${containerQuery({
    breakpoints: eventPageQuerySize.priorityBox,
    containerName: 'priority-box',
    styles: `
            display: none;
          `,
  })}
`;

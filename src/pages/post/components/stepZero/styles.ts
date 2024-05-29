import { colors } from '@/styles/colorPalette';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  height: 700px;
  border-bottom: 2px solid ${colors.black};
`;

export const Block = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  &:nth-of-type(1) {
    border-right: 2px solid ${colors.black};
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  transition: opacity 1s ease-in-out;
  border-bottom: 2px solid ${colors.black};
  &:last-child {
    border-bottom: none;
  }
`;

export const Button = styled.button<{ isActive?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:nth-of-type(1) {
    border-right: 2px solid ${colors.black};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${colors.black};
      color: ${colors.white};
    `}
`;

interface RangeProps {
  value: number;
  min: number;
  max: number;
}

export const Range = styled.input<RangeProps>`
  -webkit-appearance: none;
  appearance: none;
  margin: 30px;
  width: 600px;
  height: 20px;
  background: ${colors.gray100};

  /* 핸들 스타일 */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: ${colors.black};
    cursor: pointer;
    border: solid 1px ${colors.gray100};
    border-radius: 0;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: ${colors.black};
    cursor: pointer;
    border-radius: 0;
  }

  &::-ms-thumb {
    width: 20px;
    height: 20px;
    background: ${colors.black};
    cursor: pointer;
    border-radius: 0;
  }

  /* 슬라이더 진행 부분 */
  background: ${(props) => {
    const percentage = ((props.value - props.min) / (props.max - props.min)) * 100;
    return `linear-gradient(to right, ${colors.black} ${percentage}%, ${colors.gray100} ${percentage}%)`;
  }};
`;

export const Date = styled.div`
  flex: 1;
  border-bottom: 2px solid ${colors.black};
`;

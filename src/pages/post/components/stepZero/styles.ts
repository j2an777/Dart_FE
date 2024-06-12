import { Text } from '@/components';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import { bolderMap, typographyMap } from '@/styles/typography';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  border-bottom: 2px solid ${colors.black};
`;

export const Box = styled.div`
  flex: 1;
  width: 640px;
  height: 100%;
  display: flex;
  flex-direction: column;
  &:nth-of-type(1) {
    border-right: 2px solid ${colors.black};
  }
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid ${colors.black};
  &:last-child {
    border-bottom: none;
  }

  a {
    ${LayoutMap.displayFlex}
    height: 100%;
    padding: 0 20px;
    border-right: 2px solid ${colors.black};
  }
  div,
  p {
    margin-left: 240px;
  }
`;

export const Button = styled.button<{ isActive?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:hover {
    background: ${colors.black};
    color: ${colors.white};
  }

  &:nth-of-type(1) {
    border-right: 2px solid ${colors.black};
  }
  &:nth-of-type(3) {
    border-left: 2px solid ${colors.black};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${colors.black};
      color: ${colors.white};
    `}
`;

export const PayButtons = styled.section`
  position: absolute;
  right: 100px;
  display: flex;
  gap: 25px;
`;

export const Date = styled.div`
  flex: 1;
  border-bottom: 2px solid ${colors.black};
  display: flex;
  justify-content: center;
`;

export const Total = styled(Text)`
  color: ${colors.red};
`;

export const StyledCalendar = styled(Calendar)`
  position: absolute;
  top: 285px;
  left: 50%;
  transform: translateX(15%);
  width: 500px;
  border: none;
  ${typographyMap.t5}

  .react-calendar__navigation__label {
    ${typographyMap.t4}
    ${bolderMap.semibold}
  }

  // 오늘 날짜
  .react-calendar__tile--now {
    background: none;
    border: 1px solid ${colors.red};
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${colors.gray100};
  }

  //시작 날짜
  .react-calendar__tile--active {
    position: relative;
    overflow: visible;
    background: ${colors.gray600};
    color: ${colors.white};
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${colors.gray600};
    color: ${colors.white};
  }

  //기간
  .highlight {
    background: ${colors.gray600};
    color: ${colors.white};
  }
`;

// 가격 슬라이더
interface RangeProps {
  value: number;
  min: number;
  max: number;
}

export const Range = styled.input<RangeProps>`
  -webkit-appearance: none;
  appearance: none;
  margin: 0 20px;
  width: 500px;
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

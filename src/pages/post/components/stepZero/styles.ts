import { Text } from '@/components';
import { containerQuery } from '@/styles/breakpoints';
import { buttonActiveMap } from '@/styles/button';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import { bolderMap, typographyMap } from '@/styles/typography';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Breakpoints } from '../../styles';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  border-bottom: 2px solid ${colors.black};
  height: 700px;

  ${containerQuery({
    containerName: 'post',
    styles: `
      height: 600px;
    
    `,
    breakpoints: Breakpoints.tablet,
  })}

  ${containerQuery({
    containerName: 'post',
    styles: `
      flex-direction: column;
      height: 100%;
    `,
    breakpoints: Breakpoints.column,
  })}
`;

export const Box = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${containerQuery({
    containerName: 'post',
    styles: `
        min-height: 80vw;
      `,
    breakpoints: Breakpoints.column,
  })}

  // dropZone
  &:nth-of-type(1) {
    border-right: 2px solid ${colors.black};

    ${containerQuery({
      containerName: 'post',
      styles: `
        border-right: none;
        border-bottom: 2px solid ${colors.black};
        min-height: 80vw;
      `,
      breakpoints: Breakpoints.column,
    })}
  }
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid ${colors.black};

  // 총 이용료
  &:last-child {
    border-bottom: none;
  }

  a {
    ${LayoutMap.displayFlex}
    justify-content: center;
    padding: 0 20px;
    min-width: 116px;
    height: 100%;
    border-right: 2px solid ${colors.black};
  }

  p {
    margin-left: 35%;
  }
`;

export const Button = styled.button<{ isActive?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:hover {
    ${buttonActiveMap.rectangleBlack}
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
      ${buttonActiveMap.rectangleBlack}
    `}
`;

export const PayButtons = styled.section`
  display: flex;
  align-items: center;
  width: 50%;
  min-width: 235px;
  gap: 20%;
  margin-left: 20%;
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
  border: none;
  padding: 10%;
  width: 100%;

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

  // 비활성화된 타일 스타일
  .react-calendar__navigation button:disabled,
  .react-calendar__tile:disabled {
    background: ${colors.gray50};
    color: ${colors.gray400};
  }
`;

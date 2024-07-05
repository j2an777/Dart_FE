import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import { Text, UserCircle } from '@/components';
import { containerQuery } from '@/styles/breakpoints';
import { Breakpoints } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  min-height: 800px;
  padding: 100px 20px;

  ${containerQuery({
    containerName: 'member-info',
    styles: `
      max-width: 250px;
    `,
    breakpoints: Breakpoints.info_1,
  })}

  ${containerQuery({
    containerName: 'member-info',
    styles: `
      max-width: 200px;
    `,
    breakpoints: Breakpoints.info_2,
  })}

  ${containerQuery({
    containerName: 'member-info',
    styles: `
      min-height: 300px;
      max-width: none;
      width: 100%;
      justify-content: center;
      padding: 40px 0 0;
    `,
    breakpoints: Breakpoints.column,
  })}
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${containerQuery({
    containerName: 'member-info',
    styles: `
      flex-direction: row;
    `,
    breakpoints: Breakpoints.column,
  })}

  p {
    text-align: center;
    word-break: break-all;
    white-space: normal;

    ${containerQuery({
      containerName: 'member-info',
      styles: `
        text-align: start;
      `,
      breakpoints: Breakpoints.column,
    })}
  }

  // email
  p:nth-of-type(2) {
    color: ${colors.gray400};
  }

  section {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    ${containerQuery({
      containerName: 'member-info',
      styles: `
        margin: 0;
        gap: 10px;
      `,
      breakpoints: Breakpoints.column,
    })}
  }
`;

export const StyledUserCircle = styled(UserCircle)`
  ${containerQuery({
    containerName: 'member-info',
    styles: `
    width: 100px;
    height: 100px;
    
  `,
    breakpoints: Breakpoints.column,
  })}
`;

export const TextIntro = styled(Text)`
  display: block;
  margin-top: 24px;
  width: 100%;
  padding: 24px 10px;
  word-break: break-all;
  white-space: normal;
  border-top: 1px solid ${colors.gray200};
  ${containerQuery({
    containerName: 'member-info',
    styles: `
      border-top: none;
      margin-top: 0px;
      text-align: center
    `,
    breakpoints: Breakpoints.column,
  })}
`;

import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import { Icon } from '@/components';
import { buttonSizeMap, buttonTypeMap } from '@/styles/button';
import { containerQuery } from '@/styles/breakpoints';
import { Breakpoints } from '../../styles';
import { LayoutMap } from '@/styles/layout';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 600px;
  width: 930px;
  padding: 40px 80px;
  width: 100%;
  height: 100%;
  ${LayoutMap.pageLayout}
`;

export const Step = styled(Icon)`
  position: absolute;
  top: 135px;
  left: 2px;

  ${containerQuery({
    containerName: 'post',
    styles: `
      display: none;
    `,
    breakpoints: Breakpoints.tablet,
  })}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 30px 350px;
  gap: 10px;
  p {
    padding: 0 10px;
  }

  ${containerQuery({
    containerName: 'post',
    styles: `
      margin-left: 0px;
    `,
    breakpoints: Breakpoints.tablet,
  })}
`;

export const BorderLine = styled.div`
  border-bottom: 1px solid ${colors.black};
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${containerQuery({
    containerName: 'post',
    styles: `
      flex-direction: column;
    `,
    breakpoints: Breakpoints.mobile,
  })}

  section {
    width: 320px;
    height: 220px;
    padding: 10px;
    border: 1px solid ${colors.gray400};

    ${containerQuery({
      containerName: 'post',
      styles: `
        width: 100%;
      `,
      breakpoints: Breakpoints.mobile,
    })}
  }

  article {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;

    ${containerQuery({
      containerName: 'post',
      styles: `
        width: 100%;
      `,
      breakpoints: Breakpoints.mobile,
    })}
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  div {
    display: inline-box;
    margin-top: 3px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    ${buttonSizeMap.xs}
    ${buttonTypeMap.reverseRectangleGray}
  }
`;

export const Counter = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

export const ListBox = styled.div`
  width: 100%;
  height: 420px;
  overflow-y: scroll;
  padding: 20px;

  a {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 120px;
    color: ${colors.gray400};
    line-height: 32px;
  }
`;

export const ListBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ListHandle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20px;
  cursor: grab;

  p {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    margin: 2px 0;
    border-radius: 10em;
    background-color: ${colors.gray400};
  }

  p:nth-of-type(1),
  p:nth-of-type(2),
  p:nth-of-type(3) {
    margin: 2px 0;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-left: 5px;
  margin-bottom: 10px;
  border: 1px solid ${colors.gray400};
  background: ${colors.white};

  p {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    width: 50px;
    height: 50px;
  }

  button {
    ${buttonSizeMap.xs}
    ${buttonTypeMap.reverseRectangleGray}
  }
`;

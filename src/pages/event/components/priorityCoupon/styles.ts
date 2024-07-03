import { colors } from '@/styles/colorPalette';
import saleImage from '@/assets/images/for sale.png';
import styled from '@emotion/styled';
import { Button } from '@/components';
import { LayoutMap } from '@/styles/layout';
import { containerQuery } from '@/styles/breakpoints';
import { eventPageQuerySize } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid ${colors.gray300};
  padding: 40px 30px;
  background-image: url(${saleImage});
  background-size: 80% auto;
  background-position: center;
  background-repeat: no-repeat;

  ${containerQuery({
    breakpoints: eventPageQuerySize.priorityBoxMobile,
    containerName: 'priority-box',
    styles: `
    gap: 0;
    `,
  })}
`;

export const IssueButton = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const DescBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
export const TimerBlock = styled.div`
  ${LayoutMap.displayFlex}
  gap: 10px;
`;

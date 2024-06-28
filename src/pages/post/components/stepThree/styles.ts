import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import { Icon } from '@/components';
import { Text } from '@/components';

export const Container = styled.div`
  position: relative;
  padding: 650px 84px 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-top: 2px solid ${colors.black};

  article {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Step = styled(Icon)`
  position: absolute;
  top: 60px;
  right: 2px;
`;

export const Content = styled(Text)`
  // position: absolute;
  // top: 400px;
  // right: 50px;
`;

export const TemplatePreview = styled.div`
  position: absolute;
  top: 60px;
  left: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  //width: 800px;
  z-index: var(--lower-zindex);
`;

export const Image = styled.img`
  width: 750px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  width: 100px;
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;

  border: 4px solid ${colors.black};
`;

export const Checked = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${colors.black};
`;

export const CheckBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${colors.black};
`;

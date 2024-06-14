import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 65px);
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  padding: 20px;
  flex: 1;
  overflow-y: auto;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 70px;
  padding: 10px;
  border-top: 1px solid ${colors.black};
`;

export const Input = styled.input`
  width: 100%;
  height: 80%;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid ${colors.black};
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  section {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

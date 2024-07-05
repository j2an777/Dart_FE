import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 65px);
`;

export const ScrollableContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: end;
  padding: 20px;
  flex: 1;
  height: 100%;
  overflow-y: scroll;
  gap: 30px;

  /* 스크롤 스타일 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(150, 150, 150, 0.5);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(85, 85, 85, 0.5);
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export const Date = styled.div`
  position: relative;
  text-align: center;
  p {
    position: relative;
    display: inline-block;
    border-radius: 10px;
    background-color: ${colors.gray300};
    padding: 5px 10px;
    z-index: 2;
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 50%;
  border: 1px solid ${colors.gray300};
  width: 100%;
  z-index: 1;
`;

export const ChatBox = styled.div<{ isMine: boolean; isAuthor: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  padding: 10px;
  align-items: ${({ isAuthor, isMine }) =>
    isAuthor ? 'center' : isMine ? 'flex-end' : 'flex-start'};
  border: ${({ isAuthor }) => isAuthor && `2px solid ${colors.gray300}`};
  border-radius: ${({ isAuthor }) => isAuthor && `10px`};

  > p {
    max-width: 90%;
    margin-left: 20px;
    padding: 10px;
    text-align: ${({ isAuthor, isMine }) =>
      isAuthor ? 'center' : isMine ? 'right' : 'left'};
    background: ${({ isAuthor }) => (isAuthor ? 'none' : colors.white)};
    border-radius: ${({ isAuthor, isMine }) =>
      isAuthor ? 0 : isMine ? '10px 0px 10px 10px' : '0px 10px 10px 10px'};
  }
`;

export const SenderBlock = styled.div<{ isMine: boolean; isAuthor: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: ${({ isAuthor, isMine }) =>
    isAuthor || !isMine ? 'row-reverse' : 'row'};

  p {
    color: ${({ isAuthor }) => (isAuthor ? colors.red : colors.black)};
  }
`;

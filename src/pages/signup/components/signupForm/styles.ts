import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 50px;
`;

export const CheckBox = styled.div`
  display: flex;
  gap: 60px;
  align-items: end;
  justify-content: space-between;
`;

export const BankBox = styled.div`
  display: flex;
  gap: 40px;

  & > :first-of-type {
    width: 100px;
  }
  & > :last-of-type {
    flex: 2;
  }
`;
// 여기 조금 애매하네.. ㄷㄷ inputArea에 flex:1이 있어서 이런식으로밖에 안된다

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 200px;
  background-color: inherit;
  color: ${colors.white};
  padding: 20px;
  font-size: 16px;
  font-weight: 300;
  border: 1px solid ${colors.white};
  margin-top: 40px;
  ::placeholder {
    color: white;
  }
`;

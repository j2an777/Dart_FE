import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

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

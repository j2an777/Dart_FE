import { colors } from '@/styles/colorPalette';
import { typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';

export const StyledTagsInput = styled.div`
  border: 2px solid ${colors.black};
  padding: 10px 20px;
  max-width: 783px;
  min-height: 62.5px;
  ${typographyMap.t6}

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      margin: 5px;

      p {
        padding: 5px;
        background: ${colors.gray100};
        cursor: pointer;
      }

      button {
        padding: 5px;
        background: ${colors.gray100};
        color: ${colors.gray400};
      }

      input {
        width: 300px;
        padding: 5px;
        margin-right: 5px;
        ${typographyMap.t6}
      }

      span {
        cursor: pointer;
      }
    }
  }

  input[type='text'] {
    padding: 5px;
    border-radius: 3px;
  }

  input[type='text']:focus {
    outline: none;
    border-color: #999;
  }
`;

export const InputBox = styled.input<{ width?: number; height?: number }>`
  border: 2px solid ${colors.black};
  color: ${colors.black};
  padding: 20px;
  ${typographyMap.t6};
  width: ${({ width = '100%' }) => `${width}px`};
  height: ${({ height = '100%' }) => `${height}px`};
`;

export const TextBox = styled.textarea<{ width?: number; height?: number }>`
  border: 2px solid ${colors.black};
  color: ${colors.black};
  padding: 20px;
  width: ${({ width = '100%' }) => `${width}px`};
  height: ${({ height = '100%' }) => `${height}px`};
  resize: none;
  overflow: auto;
`;

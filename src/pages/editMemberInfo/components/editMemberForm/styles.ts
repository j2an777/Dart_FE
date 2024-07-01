import { Text } from '@/components';
import { buttonSizeMap, buttonTypeMap } from '@/styles/button';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import { bolderMap, typographyMap } from '@/styles/typography';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.form`
  width: 700px;
  height: 600px;
  ${LayoutMap.displayFlex};
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1024px) {
    width : 90vw;
    height : auto;
  }
`;

export const ProfileBlock = styled.div`
  width: 100%;
  height: 200px;
  ${LayoutMap.displayFlex};
  margin-top: 20px;

  @media (max-width: 1024px) {
    justify-content: space-evenly;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap : 20px;
    margin-top : 20px;
  }
`;

export const ProfileLeft = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  ${LayoutMap.displayFlex};
  justify-content: center;
  gap: 10px;

  @media (max-width: 1024px) {
    width : auto;
  }
`;

export const ProfilePlus = styled.label`
  position: absolute;
  top: 25px;
  right: 70px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${colors.gray300};
  color: ${colors.gray600};
  ${LayoutMap.displayFlex};
  ${bolderMap.bold};
  ${typographyMap.t4};
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    right : -30px;
    width : 25px;
    height : 25px;
  }
  
  @media (max-width: 500px) {
    top : 0;
    right : -35px;
  }
`;

export const ProfilePlusBtn = styled.input`
  display: none;
`;

export const ProfileRight = styled.div`
  width: 50%;
  height: 100px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  align-items: center;

  @media (max-width: 1024px) {
    width : auto;
  }
`;

interface ProfileCategoryProps {
  type: string;
}

export const ProfileCategory = styled(Text)<ProfileCategoryProps>`
  ${typographyMap.t5};

  ${props => props.type === 'category' ? css`
    ${bolderMap.regular};
  ` : css`
    ${bolderMap.medium};
  `};

  @media (max-width: 1024px) {
    ${typographyMap.t7};
  }
`;

export const EditBlock = styled.div`
  width: 100%;
  height: auto;
  ${LayoutMap.displayFlex};
  flex-direction: column;
  gap: 40px;
  padding: 0 50px;
  box-sizing: border-box;
`;

export const NicknameBox = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 100px 1fr 120px;
  gap: 20px;

  @media (max-width : 500px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
`;

export const NickNameText = styled(Text)`
    @media (max-width : 500px) {
      grid-column: 1 / span 2;
      ${typographyMap.t6};
    }
`;

export const IntroduceBox = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 100px 1fr 120px;
  grid-template-rows: 50px 50px;
  gap: 20px;

  @media (max-width : 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const IntroduceText = styled(Text)`
    @media (max-width : 500px) {
      ${typographyMap.t6};
    }
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #ccc;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  grid-column: 2 / span 3;
  grid-row: 1 / span 2;
`;

export const CancelBtn = styled.button`
  ${buttonTypeMap.reverseRectangleGray};
  ${buttonSizeMap.md};
  transition: all 0.3s ease;

  &:hover {
    ${buttonTypeMap.rectangleGray};
  }

  @media (max-width: 500px) {
    width : 100%;
    order: 2;
  }
`;

export const StoreBtn = styled.button`
  ${buttonTypeMap.rectangleWhite};
  ${buttonSizeMap.md};
  transition: all 0.3s ease;

  &:hover {
    ${buttonTypeMap.rectangleBlack};
  }

  @media (max-width: 500px) {
    width : 100%;
    order: 1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;

  @media (max-width: 500px) {
    width : 100%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const Error = styled.p<{ nicknameError: string }>`
  position: absolute;
  left: 120px;
  bottom: -20px;
  ${typographyMap.t7};
  color: ${(props) =>
    props.nicknameError === '사용 가능한 닉네임입니다.' ? colors.green : colors.red};

  @media (max-width: 500px) {
    left : 0;
  }
`;

export const CheckBtn = styled.button`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  ${buttonTypeMap.rectangleWhite};

  &:hover {
    ${buttonTypeMap.rectangleBlack};
  }

  @media (max-width: 500px) {
    ${typographyMap.t8};
  }
`;

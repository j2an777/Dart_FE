import { buttonSizeMap, buttonTypeMap } from "@/styles/button";
import { colors } from "@/styles/colorPalette";
import { LayoutMap } from "@/styles/layout";
import { bolderMap, typographyMap } from "@/styles/typography";
import styled from "@emotion/styled";

export const Container = styled.div`
    width : 700px;
    height : 600px;
    ${LayoutMap.displayFlex};
    flex-direction : column;
    gap : 30px;
`;

export const ProfileBlock = styled.div`
    width : 100%;
    height : 200px;
    ${LayoutMap.displayFlex};
    margin-top : 20px;
`;

export const ProfileLeft = styled.div`
    position : relative;
    width : 50%;
    height : 100%;
    ${LayoutMap.displayFlex};
    justify-content : center;
    gap : 10px;
`;

export const ProfilePlus = styled.label`
    position : absolute;
    top : 25px;
    right : 70px;
    width : 30px;
    height : 30px;
    border-radius : 50%;
    background-color : ${colors.gray300};
    color : ${colors.gray600};
    ${LayoutMap.displayFlex};
    ${bolderMap.bold};
    ${typographyMap.t4};
    justify-content : center;

    &:hover {
        cursor : pointer;
    }
`;

export const ProfilePlusBtn = styled.input`
    display : none;
`;

export const ProfileRight = styled.div`
    width : 50%;
    height : 100px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 30px;
    align-items: center;
`;

export const EditBlock = styled.div`
    width : 100%;
    height : 300px;
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: auto auto auto;
    gap : 20px;
    align-items: center;
    padding: 0 50px;
    box-sizing : border-box;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  grid-column: 2;
  grid-row: 2 / span 3;
`;

export const CancelBtn = styled.button`
  ${buttonTypeMap.reverseRectangleGray};
  ${buttonSizeMap.md};
  transition : all 0.3s ease;

  &:hover{
    ${buttonTypeMap.rectangleGray};
  }
`;

export const StoreBtn = styled.button`
  ${buttonTypeMap.rectangleWhite};
  ${buttonSizeMap.md};
  transition : all 0.3s ease;

  &:hover {
    ${buttonTypeMap.rectangleBlack};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  grid-column: 1 / span 2;
  grid-row : 5;
`;

export const Error = styled.p`
  ${typographyMap.t7};
  color : ${colors.red};
`;
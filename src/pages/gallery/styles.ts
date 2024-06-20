import styled from "@emotion/styled";
import displayImg from '@/assets/images/display.png';

export const Container = styled.div<{ expand: number }>`
    position : absolute;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    width : 100vw;
    height: ${props => props.expand !== 0 ? `${props.expand+1}00vh` : '100vh'};
    padding : 50px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background-image : url(${displayImg});
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat;
    background-attachment: fixed;
`;
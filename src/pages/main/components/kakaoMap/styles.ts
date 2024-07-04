import styled from '@emotion/styled';

export const Container = styled.div`
    position : absolute;
    bottom : 5%;
    right : 20px;
    width : 300px;
    height : 300px;
    background-color : #f0f0f0;

    @media (max-width : 768px) {
        width : 200px;
        height : 200px;
        bottom : 30%;
    }

    @media (max-width: 660px) {
        display : none;
    }
`;
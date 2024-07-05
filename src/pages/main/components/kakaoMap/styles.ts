import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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

export const CircleLoader = styled(motion.span)`
    width: 5rem;
    height: 5rem;
    border: 0.5rem solid #e9e9e9;
    border-top: 0.5rem solid #3498db;
    border-radius: 50%;
`;
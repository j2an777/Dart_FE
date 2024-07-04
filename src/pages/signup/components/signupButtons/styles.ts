import { Button } from '@/components';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
  }
`;

export const StyledButton = styled(Button)`
  @media (max-width: 600px) {
    width: 100%;
  }
`;

import { Icon } from '@/components';
import styled from '@emotion/styled';

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const ButtonBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const SubmitIcon = styled(Icon)`
  position: absolute;
  right: 0;
`;

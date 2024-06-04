import { Button, Text } from '@/components';
import * as S from './styles';
import { useState } from 'react';

interface ButtonBarProps {
  title: string;
}

const ButtonBar = ({ title }: ButtonBarProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <S.Container>
      <Text typography="t6" bold="regular">
        {title}
      </Text>
      <S.ButtonBox>
        <Button buttonType="RoundBlack" size="xs" children="전시예정" />
        <Button buttonType="onlyText" size="xs" children="전시중" color="black" />
        <Button buttonType="onlyText" size="xs" children="전시종료" color="black" />
      </S.ButtonBox>
    </S.Container>
  );
};

export default ButtonBar;

import { Button, Icon, Text } from '@/components';
import { ButtonBar, PostButton } from '..';

import * as S from './styles';

const Filter = () => {
  return (
    <S.Container>
      <S.TitleBox>
        <Text typography="t6" bold="bold">
          FILTER
        </Text>
        <Icon value="filter" $active={false} />
      </S.TitleBox>
      <S.SeacchBox>
        <S.SearchInupt type="text" placeholder="Search..." />
        <S.SeacchButtonBlock>
          <Button buttonType="RoundBlack" size="sm" children="작가" />
          <Button buttonType="reverseRoundBlack" size="sm" children="제목" />
          <Button buttonType="reverseRoundBlack" size="sm" children="해시태그" />
        </S.SeacchButtonBlock>
      </S.SeacchBox>
      <S.PriceBox>
        <Text typography="t6" bold="regular">
          비용
        </Text>
        <S.PriceButtonBlock>
          <Button buttonType="circle" size="circle">
            PAY
          </Button>
          <Button buttonType="reverseCircle" size="circle">
            FREE
          </Button>
        </S.PriceButtonBlock>
      </S.PriceBox>
      <ButtonBar title="전시상태" />
      <ButtonBar title="정렬" />
      <PostButton />
    </S.Container>
  );
};

export default Filter;

import { useState } from 'react';
import { CouponIssue, CouponList } from './components';

import * as S from './styles';

const eventArray = [
  {
    value: 'issue',
  },
  {
    value: 'my',
  },
] as { value: 'issue' | 'my' }[];

const EventPage = () => {
  const [info, setInfo] = useState<'issue' | 'my'>('issue');
  return (
    <S.Container>
      <S.InfoBox>
        {eventArray.map(({ value }) => (
          <S.InfoButton
            key={value}
            buttonType="onlyText"
            bold="bold"
            size="mdlg"
            selected={value === info}
            onClick={() => setInfo(value)}
          >
            {value === 'issue' ? '쿠폰조회' : 'My쿠폰'}
          </S.InfoButton>
        ))}
      </S.InfoBox>
      {info === 'issue' ? <CouponIssue /> : <CouponList />}
    </S.Container>
  );
};

export default EventPage;

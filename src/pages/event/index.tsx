import { useState } from 'react';
import { eventArray } from '@/consts/coupon';
import useGetMyCoupons from './hooks/useGetMyCoupons';
import { CouponIssue, CouponList } from './components';

import * as S from './styles';
import { memberStore } from '@/stores/member';

const EventPage = () => {
  const [info, setInfo] = useState<'issue' | 'my'>('issue');
  const { data } = useGetMyCoupons(info === 'my');
  const isLogin = !!memberStore((state) => state.accessToken);
  return (
    <S.Container>
      <S.InfoBox>
        {eventArray.map(({ value }, index) => {
          if (!isLogin && index !== 0) {
            return;
          } else {
            return (
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
            );
          }
        })}
      </S.InfoBox>
      {info === 'issue' ? <CouponIssue /> : <CouponList array={data?.myCoupons ?? []} />}
    </S.Container>
  );
};

export default EventPage;

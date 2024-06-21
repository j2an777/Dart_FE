import { Dimmed, Icon, Text } from '@/components';
import { CouponList } from '@/pages/event/components';

import * as S from './styles';

const CouponModal = ({ close }: { close: () => void }) => {
  return (
    <Dimmed>
      <S.Container>
        <S.HeaderBox>
          <Text typography="t4">보유 쿠폰</Text>
          <Icon value="cancel" size={15} onClick={close} />
        </S.HeaderBox>
        <S.ScrollBox>
          <CouponList orientation="vertical" />
        </S.ScrollBox>
      </S.Container>
    </Dimmed>
  );
};

export default CouponModal;

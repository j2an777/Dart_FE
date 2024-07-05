import { CheckAgree } from '..';
import { Text } from '@/components';
import { agreeInfo } from '@/consts/agree';

import * as S from './styles';
import { agreeStore } from '@/stores/agree';
import { useEffect } from 'react';

const SignupAgree = () => {
  const { agreements, allChecked, setAgreements, toggleAll, resetAgreements } =
    agreeStore();
  useEffect(() => {
    return resetAgreements;
  }, [resetAgreements]);
  return (
    <S.Container>
      <Text typography="t1" color="white" bold="regular">
        약관동의
      </Text>
      <S.Line />
      <S.AgreeBox>
        {agreeInfo.map(({ value, description, ...props }) => {
          if (value === 'total')
            return (
              <CheckAgree
                key={value}
                value={value}
                checked={allChecked}
                onClick={toggleAll}
                {...props}
              />
            );
          else {
            return (
              <CheckAgree
                key={value}
                value={value}
                onClick={setAgreements}
                checked={agreements[value]}
                description={description}
                {...props}
              />
            );
          }
        })}
      </S.AgreeBox>
      <Text typography="t6" color="gray400">
        * 필수항목에 동의하지 않으실 경우 서비스 가입이 불가능합니다.
      </Text>
    </S.Container>
  );
};

export default SignupAgree;

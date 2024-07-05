import Footer from '@/components/footer';
import * as S from './styles';
import { Suspense, lazy, useEffect } from 'react';
import LogoLoader from '@/components/logoLoader';
import hasInvited from '@/utils/hasInvited';

const IntroPage = () => {
  const SBanner = lazy(() => import('./components/banner'));
  const SIntroduce = lazy(() => import('./components/introduce'));
  const { setInvited } = hasInvited();
  useEffect(() => {
    return setInvited;
  }, []);
  return (
    <S.Container>
      <Suspense fallback={<LogoLoader />}>
        <SBanner />
      </Suspense>
      <Suspense fallback={<LogoLoader />}>
        <SIntroduce />
      </Suspense>
      <Footer />
    </S.Container>
  );
};

export default IntroPage;

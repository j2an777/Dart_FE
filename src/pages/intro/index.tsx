import Footer from "@/components/footer";
import * as S from './styles';
import { Suspense, lazy } from "react";
import LogoLoader from "@/components/logoLoader";

const IntroPage = () => {

  const SBanner = lazy(() => import('./components/banner'));
  const SIntroduce = lazy(() => import('./components/introduce'));

  return (
    <S.Container>
      <Suspense fallback={ <LogoLoader /> }>
        <SBanner />
      </Suspense>
      <Suspense fallback={ <LogoLoader /> }>
        <SIntroduce />
      </Suspense>
      <Footer />
    </S.Container>
  );
};

export default IntroPage;

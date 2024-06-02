import Footer from "@/components/footer";
import * as S from './styles';
import Banner from "./components/banner";
import Introduce from "./components/introduce";

const IntroPage = () => {
  return (
    <S.Container>
      <Banner />
      <Introduce />
      <Footer />
    </S.Container>
  );
};

export default IntroPage;

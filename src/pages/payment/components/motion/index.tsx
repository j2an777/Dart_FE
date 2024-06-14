import { Variants } from 'framer-motion';
import * as S from './styles';
import TicketSvg from '../TicketSvg';
import { useNavigate } from 'react-router-dom';

interface Props {
  content: string;
  path: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: -900,
  },
  onscreen: {
    y: -500,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.5,
    },
  },
};

const Card = ({ content, path }: Props) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.CardContainer initial="offscreen" animate="onscreen">
        <S.Splash />
        <S.Card variants={cardVariants}>
          <S.Button onClick={() => navigate(path)}>{content}</S.Button>
          <TicketSvg />
        </S.Card>
      </S.CardContainer>
    </S.Container>
  );
};

export default Card;

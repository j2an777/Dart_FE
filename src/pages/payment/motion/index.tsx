import { Variants } from 'framer-motion';
import * as S from './styles';

interface Props {
  emoji: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Card = ({ emoji }: Props) => {
  return (
    <S.Container>
      <S.CardContainer
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <S.Splash />
        <S.Card variants={cardVariants}>{emoji}</S.Card>
      </S.CardContainer>
    </S.Container>
  );
};

export default Card;

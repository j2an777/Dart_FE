import { Dimmed } from '..';
import * as S from './styles';

const CircleLoader = () => {
  return (
    <Dimmed>
      <S.CircleLoader
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 1,
          Infinity: true,
        }}
      />
    </Dimmed>
  );
};

export default CircleLoader;

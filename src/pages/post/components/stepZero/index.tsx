import DropZone from '@/components/dropZone';
import * as S from './styles';
import { useState } from 'react';
import Calendar from 'react-calendar';

const StepZero = () => {
  const [activeBtn, setActiveBtn] = useState<string | null>(null);
  const [price, setPrice] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());

  const onBtnClick = (buttonType: string) => {
    setActiveBtn(buttonType);
  };
  return (
    <S.Container>
      <S.Block>
        <DropZone />
      </S.Block>
      <S.Block>
        <S.Box>
          <S.Button isActive={activeBtn === 'free'} onClick={() => onBtnClick('free')}>
            무료 전시
          </S.Button>
          <S.Button isActive={activeBtn === 'pay'} onClick={() => onBtnClick('pay')}>
            유료 전시
          </S.Button>
        </S.Box>
        {activeBtn === 'pay' && (
          <S.Box>
            <S.Range
              type="range"
              min={0}
              max={20000}
              step={1000}
              value={price}
              onChange={(event) => setPrice(event.target.valueAsNumber)}
            />
            ₩ {price}
          </S.Box>
        )}
        <S.Date>
          <Calendar value={date} />
        </S.Date>

        <S.Box>전시 기간</S.Box>
        <S.Box>총 이용료</S.Box>
      </S.Block>
    </S.Container>
  );
};

export default StepZero;

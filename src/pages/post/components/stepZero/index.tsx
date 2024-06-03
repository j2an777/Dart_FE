import DropZone from '@/components/dropZone';
import * as S from './styles';
import { useEffect, useState } from 'react';

const StepZero = () => {
  const [activeBtn, setActiveBtn] = useState<string | null>(null);
  const [price, setPrice] = useState<number>(0);
  const [date, setDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [period, setPeriod] = useState<string | null>(null);
  const [totalCost, setTotalCost] = useState<number>(0);

  const onBtnClick = (buttonType: string) => {
    setActiveBtn(buttonType);
  };
  const onPeriodClick = (buttonType: string) => {
    setPeriod(buttonType);
  };
  useEffect(() => {
    if (activeBtn === 'pay' && date instanceof Date) {
      if (period === '7days') {
        setTotalCost(1000);
        setEndDate(new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000));
      } else if (period === '15days') {
        setTotalCost(2000);
        setEndDate(new Date(date.getTime() + 15 * 24 * 60 * 60 * 1000));
      } else if (period === '30days') {
        setTotalCost(4000);
        setEndDate(new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000));
      } else {
        setTotalCost(0);
        setEndDate(null);
      }
    } else {
      setTotalCost(0);
      setEndDate(null);
    }
  }, [period, activeBtn, date]);

  return (
    <S.Container>
      <S.Box>
        <DropZone info="권장 이미지 크기: 700*700" />
      </S.Box>
      <S.Box>
        <S.Block>
          <S.Button isActive={activeBtn === 'free'} onClick={() => onBtnClick('free')}>
            무료 전시
          </S.Button>
          <S.Button isActive={activeBtn === 'pay'} onClick={() => onBtnClick('pay')}>
            유료 전시
          </S.Button>
        </S.Block>
        {activeBtn === 'pay' && (
          <S.Block>
            <S.Range
              type="range"
              min={0}
              max={20000}
              step={1000}
              value={price}
              onChange={(event) => setPrice(event.target.valueAsNumber)}
            />
            ₩ {price}
          </S.Block>
        )}
        <S.Date>
          <S.StyledCalendar
            value={date}
            onChange={setDate}
            selectRange={false}
            defaultView="month"
            showNeighboringMonth={false}
          />
        </S.Date>
        {activeBtn === 'pay' && (
          <S.Block>
            <p>전시 기간</p>
            <S.Button
              isActive={period === '7days'}
              onClick={() => onPeriodClick('7days')}
            >
              7 일
            </S.Button>
            <S.Button
              isActive={period === '15days'}
              onClick={() => onPeriodClick('15days')}
            >
              15 일
            </S.Button>
            <S.Button
              isActive={period === '30days'}
              onClick={() => onPeriodClick('30days')}
            >
              30 일
            </S.Button>
          </S.Block>
        )}
        <S.Block>
          <p>총 이용료</p>
          <div> ₩ {totalCost}</div>
        </S.Block>
      </S.Box>
    </S.Container>
  );
};

export default StepZero;

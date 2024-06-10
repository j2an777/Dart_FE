import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import DropZone from '@/components/dropZone';
import { formatDateInKST } from '@/utils/formatDateInKST';
import * as S from './styles';
import { dateNfeeStore } from '@/stores/post';

const StepZero = () => {
  const { setValue } = useFormContext();
  const { activeBtn, dateRange, feeDetails, setActiveBtn, setDateRange, setFeeDetails } =
    dateNfeeStore();

  useEffect(() => {
    setValue('gallery.fee', feeDetails.fee);
  }, [feeDetails.fee, setValue]);

  useEffect(() => {
    if (activeBtn === 'pay' && dateRange.startDate) {
      let endDate: Date | null = null;
      let pay = 0;
      switch (feeDetails.period) {
        case '7days':
          pay = 1000;
          endDate = new Date(dateRange.startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
          break;
        case '15days':
          pay = 2000;
          endDate = new Date(dateRange.startDate.getTime() + 15 * 24 * 60 * 60 * 1000);
          break;
        case '30days':
          pay = 4000;
          endDate = new Date(dateRange.startDate.getTime() + 30 * 24 * 60 * 60 * 1000);
          break;
        default:
          break;
      }
      setFeeDetails({ ...feeDetails, totalPay: pay });
      setDateRange({ ...dateRange, endDate });
      setValue('gallery.startDate', formatDateInKST(dateRange.startDate));
      setValue('gallery.endDate', formatDateInKST(endDate));
    } else {
      setValue('gallery.startDate', formatDateInKST(dateRange.startDate));
      setFeeDetails({ ...feeDetails, totalPay: 0 });
      setDateRange({ ...dateRange, endDate: null });
    }
  }, [
    feeDetails.period,
    activeBtn,
    dateRange.startDate,
    setValue,
    dateRange,
    feeDetails,
    setFeeDetails,
    setDateRange,
  ]);

  const onFileDrop = (file: File) => {
    setValue('thumbnail', file);
  };

  const onBtnClick = (buttonType: 'free' | 'pay') => {
    setActiveBtn(buttonType);
    if (buttonType === 'free') {
      setFeeDetails({ fee: 0, totalPay: 0, period: null });
      setDateRange({ ...dateRange, endDate: null });
      setValue('gallery.fee', 0);
      setValue('gallery.endDate', null);
    }
  };

  const onPeriodClick = (period: string) => {
    setFeeDetails({ ...feeDetails, period });
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month' && dateRange.startDate && dateRange.endDate) {
      if (date >= dateRange.startDate && date <= dateRange.endDate) {
        return 'highlight';
      }
    }
    return null;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <S.Container onKeyDown={handleKeyDown}>
      <S.Box>
        <DropZone info="권장 이미지 크기: 700*700" onFileUpload={onFileDrop} />
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
              value={feeDetails.fee}
              onChange={(event) =>
                setFeeDetails({ ...feeDetails, fee: event.target.valueAsNumber })
              }
            />
            ₩ {feeDetails.fee}
          </S.Block>
        )}
        <S.Date>
          <S.StyledCalendar
            value={dateRange.startDate}
            onChange={(date) => setDateRange({ ...dateRange, startDate: date as Date })}
            selectRange={false}
            defaultView="month"
            calendarType="gregory"
            showNeighboringMonth={false}
            locale={'en'}
            formatDay={(_locale, date) => date.toLocaleString('en', { day: 'numeric' })}
            tileClassName={tileClassName}
          />
        </S.Date>
        {activeBtn === 'pay' && (
          <S.Block>
            <p>전시 기간</p>
            <S.Button
              isActive={feeDetails.period === '7days'}
              onClick={() => onPeriodClick('7days')}
            >
              7 일
            </S.Button>
            <S.Button
              isActive={feeDetails.period === '15days'}
              onClick={() => onPeriodClick('15days')}
            >
              15 일
            </S.Button>
            <S.Button
              isActive={feeDetails.period === '30days'}
              onClick={() => onPeriodClick('30days')}
            >
              30 일
            </S.Button>
          </S.Block>
        )}
        <S.Block>
          <p>총 이용료</p>
          <div> ₩ {feeDetails.totalPay}</div>
        </S.Block>
      </S.Box>
    </S.Container>
  );
};

export default StepZero;

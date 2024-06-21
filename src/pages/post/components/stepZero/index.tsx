import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import DropZone from '@/components/dropZone';
import { formatDateInKST } from '@/utils/formatDateInKST';
import * as S from './styles';
import { dateNfeeStore } from '@/stores/post';
import { Icon } from '@/components';

const StepZero = () => {
  const { setValue } = useFormContext();
  const { activeBtn, dateRange, feeDetails, setActiveBtn, setDateRange, setFeeDetails } =
    dateNfeeStore();

  useEffect(() => {
    setValue('gallery.fee', feeDetails.fee);
  }, [feeDetails.fee, setValue]);

  useEffect(() => {
    // 유료 전시
    if (activeBtn === 'pay' && dateRange.startDate) {
      let endDate: Date | null = null;
      let pay = 0;
      // 기간에 따라 -> 이용료와 캘린더 endDate 설정
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
      // 이용료와 기간 상태 업데이트
      setFeeDetails({ ...feeDetails, totalPay: pay });
      setDateRange({ ...dateRange, endDate });
      // 이용료와 기간 formData 업데이트
      setValue('gallery.startDate', formatDateInKST(dateRange.startDate, true));
      setValue('gallery.endDate', formatDateInKST(endDate));
      setValue('gallery.generatedCost', pay);
    } else {
      // 무료 전시
      setValue('gallery.generatedCost', 0);
      setValue('gallery.startDate', formatDateInKST(dateRange.startDate, true));
      setFeeDetails({ ...feeDetails, totalPay: 0 });
      setDateRange({ ...dateRange, endDate: null });
    }
  }, [activeBtn, feeDetails.period, feeDetails.fee, dateRange.startDate]);

  const onFileDrop = (file: File) => {
    setValue('thumbnail', file);
  };

  const onBtnClick = (
    buttonType: 'free' | 'pay',
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setActiveBtn(buttonType);
    if (buttonType === 'free') {
      setFeeDetails({ fee: 0, totalPay: 0, period: null });
      setDateRange({ ...dateRange, endDate: null });
      setValue('gallery.fee', 0);
      setValue('gallery.endDate', null);
    } else if (buttonType === 'pay') {
      setFeeDetails({ fee: 1000, totalPay: 0, period: null });
    }
  };

  const onPeriodClick = (period: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFeeDetails({ ...feeDetails, period });
  };

  const increaseFee = () => {
    if (feeDetails.fee < 20000) {
      const newFee = feeDetails.fee + 1000;
      setFeeDetails({ ...feeDetails, fee: newFee });
      setValue('gallery.fee', newFee);
    }
  };

  const decreaseFee = () => {
    if (feeDetails.fee > 1000) {
      const newFee = feeDetails.fee - 1000;
      setFeeDetails({ ...feeDetails, fee: newFee });
      setValue('gallery.fee', newFee);
    }
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month' && dateRange.startDate && dateRange.endDate) {
      if (date >= dateRange.startDate && date <= dateRange.endDate) {
        return 'highlight';
      }
    }
    return null;
  };

  return (
    <S.Container>
      <S.Box>
        <DropZone
          info="권장 이미지 크기: 700X700 / 10MB 이하"
          onFileUpload={onFileDrop}
        />
      </S.Box>
      <S.Box>
        <S.Block>
          <S.Button
            isActive={activeBtn === 'free'}
            onClick={(e) => onBtnClick('free', e)}
          >
            무료 전시
          </S.Button>
          <S.Button isActive={activeBtn === 'pay'} onClick={(e) => onBtnClick('pay', e)}>
            유료 전시
          </S.Button>
        </S.Block>
        <S.Block>
          <a>전시 입장료</a>
          {activeBtn === 'pay' && (
            <S.PayButtons>
              <Icon value="down" onClick={decreaseFee} />
              <Icon value="up" onClick={increaseFee} />
            </S.PayButtons>
          )}
          <div>₩ {feeDetails.fee}</div>
        </S.Block>
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
        <S.Block>
          <a>전시 기간</a>
          {activeBtn === 'pay' && (
            <>
              <S.Button
                isActive={feeDetails.period === '7days'}
                onClick={(e) => onPeriodClick('7days', e)}
              >
                7 일
              </S.Button>
              <S.Button
                isActive={feeDetails.period === '15days'}
                onClick={(e) => onPeriodClick('15days', e)}
              >
                15 일
              </S.Button>
              <S.Button
                isActive={feeDetails.period === '30days'}
                onClick={(e) => onPeriodClick('30days', e)}
              >
                30 일
              </S.Button>
            </>
          )}
          {activeBtn === 'free' && <div>무기한</div>}
        </S.Block>
        <S.Block>
          <a>총 이용료</a>
          <S.Total typography="t6">₩ {feeDetails.totalPay}</S.Total>
        </S.Block>
      </S.Box>
    </S.Container>
  );
};

export default StepZero;

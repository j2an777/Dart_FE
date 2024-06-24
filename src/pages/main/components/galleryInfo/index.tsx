import Dimmed from '@/components/Dimmed';
import Icon, { IconValues } from '@/components/icon';
import Text from '@/components/Text';
import { Colors } from '@/styles/colorPalette';
import { alertStore } from '@/stores/modal';
import { useQuery } from '@tanstack/react-query';
import { getGalleryInfo } from '@/apis/gallery';
import Logo from '@/assets/images/mainLogo.png';
import useCustomNavigate from '@/hooks/useCustomNavigate';

import * as S from './styles';

interface GalleryInfoProps {
  galleryId: number | null;
  open: boolean;
  close: () => void;
  hasEnded: boolean;
}

const GalleryInfo = ({ galleryId, open: isOpen, close, hasEnded }: GalleryInfoProps) => {
  const openModal = alertStore((state) => state.open);
  const navigate = useCustomNavigate();

  const { data, error, isLoading } = useQuery({
    queryKey: ['detail'],
    queryFn: () => getGalleryInfo(galleryId as number),
  });

  const renderIcons = (reviewAverage: number) => {
    const icons = [];
    for (let i = 0; i < 5; i++) {
      let fillColor: Colors = 'black';
      let value: IconValues = 'review';

      if (i < Math.floor(reviewAverage)) {
        fillColor = 'white';
      } else if (i === Math.floor(reviewAverage) && reviewAverage % 1 !== 0) {
        value = 'halfreview';
      }

      icons.push(
        <Icon
          key={i}
          value={value}
          strokeColor="white"
          fillColor={fillColor}
          size={30}
          $active={false}
        />,
      );
    }
    return icons;
  };

  const onHandlePay = (ticket: boolean, fee: number, isOpen: boolean) => {
    const showModal = (title: string, description: string, onClickButton: () => void) => {
      openModal({
        title,
        description,
        buttonLabel: '확인',
        onClickButton,
      });
    };

    if (!isOpen) {
      showModal(
        '일장 불가',
        '전시가 예정 및 종료 상태로 입장이 불가능합니다.',
        async () => close(),
      );
      return;
    }

    if (ticket || fee === 0) {
      navigate(`/gallery/${galleryId}`);
      close();
    } else {
      showModal('티켓 구매하기', '티켓을 구매하시겠습니까?', () => {
        navigate(`/payment/${galleryId}/ticket`);
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading gallery data</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const onHandleRequest = () => {
    // 재전시 요청 api 구문 작성 
  };

  if (!isOpen) return;

  return (
    <Dimmed>
      <S.Container>
        <S.InfoBox thumbnail={data.thumbnail}>
          <S.Overlay />
          <S.CancelIcon value="cancel" size={20} onClick={close} color="white" />
          <S.MainLogo alt="main-logo" src={Logo} />
          <S.DescriptionBlock>
            <S.Top>
              <Text typography="t5" color="white" bold="medium">
                {data.title}
              </Text>
              <S.User>
                <S.Circle />
                <Text typography="t7" bold="regular" color="white">
                  {data.nickname}
                </Text>
              </S.User>
            </S.Top>
            <p id="descript">{data.content}</p>
            <Icon value="galaxy" size={20} />
            <Text typography="t7" bold="regular" color="white">
              {formatDate(data.startDate)} <span>~</span>{' '}
              {formatDate(data.endDate) === '1970-01-01'
                ? null
                : formatDate(data.endDate)}
            </Text>
            <S.HashTags>
              {data.hashtags.map((tag: string, index: number) => (
                <Text key={index} typography="t7" bold="regular" color="gray300">
                  {`#${tag}`}
                </Text>
              ))}
            </S.HashTags>
          </S.DescriptionBlock>
          <S.ButtonBlock>
            {hasEnded ? (
              <div
                className='topay' 
                onClick={() => onHandleRequest()}>
                  재전시 요청
              </div>
            ) : (
              <>
              <div className="price">₩ {data.fee}</div>
                <div
                  className="topay"
                  onClick={() => onHandlePay(data.hasTicket, data.fee, data.isOpen)}
                >
                  입장하기
              </div>
              </>
            )}
          </S.ButtonBlock>
        </S.InfoBox>
        <S.ReviewBox>
          <Text typography="t7" color="white" bold="thin">
            관람객 평점
          </Text>
          <S.ScoreBlock>
            <S.ScoreWrap>
              <S.Score>
                <Text color="white" bold="bold">
                  {data.reviewAverage}&nbsp;
                </Text>
                <Text color="white" bold="bold">
                  / 5
                </Text>
              </S.Score>
              {renderIcons(data.reviewAverage)}
            </S.ScoreWrap>
            <Text
              typography="t7"
              color="gray300"
              bold="thin"
              onClick={() => {
                navigate(`/review/${galleryId}`);
                close();
              }}
            >
              상세 리뷰 보기 &gt;
            </Text>
          </S.ScoreBlock>
        </S.ReviewBox>
      </S.Container>
    </Dimmed>
  );
};

export default GalleryInfo;

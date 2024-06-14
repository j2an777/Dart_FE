import { useEffect } from 'react';
import useGetMypage from '../../hooks/useGetMypage';
import Ticket from './Ticket';
import { pageStore } from '@/stores/page';
import { useStore } from 'zustand';
import { Gallery } from '@/types/gallery';
import * as S from './styles';
import { PageButtons } from '@/components';
import { memberStore } from '@/stores/member';

const Exhibition = () => {
  const { nickname } = memberStore((state) => state.auth);
  const { pageInfo, setPageInfo } = useStore(pageStore);
  const { data } = useGetMypage(nickname, pageInfo.pageIndex, 2);

  useEffect(() => {
    if (data) {
      setPageInfo(data.pageParams);
    }
  }, [data, setPageInfo]);
  if (!data) return;
  return (
    <S.Container>
      {data.pages.map((data: Gallery) => (
        <Ticket
          key={data.galleryId}
          thumbnail={data.thumbnail}
          title={data.title}
          startDate={data.startDate}
          endDate={data.endDate}
          fee={data.fee}
          hashtags={data.hashtags}
        />
      ))}
      <footer>
        <PageButtons />
      </footer>
    </S.Container>
  );
};

export default Exhibition;

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
  const { data, isLoading, isError } = useGetMypage(nickname, pageInfo.pageIndex, 2);

  useEffect(() => {
    setPageInfo(data.pageParams);
  }, [data.pageParams, setPageInfo]);

  return (
    <S.Container>
      {isLoading && <div>Loading...</div>}
      {isError && <div>전시 정보가 없습니다.</div>}
      {!isError &&
        !isLoading &&
        data.pages.map((data: Gallery) => (
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

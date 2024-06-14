import { useEffect } from 'react';
import useGetMypage from '../../hooks/useGetMypage';
import PageButtons from '../pageButtons';
import Ticket from './Ticket';
import { pageStore } from '@/stores/page';
import { useStore } from 'zustand';
import { Gallery } from '@/types/gallery';
import * as S from './styles';

const Exhibition = () => {
  const memberInfoString = localStorage.getItem('memberInfo');
  let nickname = null;
  if (memberInfoString !== null) {
    const memberInfo = JSON.parse(memberInfoString);
    nickname = memberInfo.state.auth.nickname;
  }

  const { pageInfo, setPageInfo } = useStore(pageStore);
  const { data, isLoading, isError } = useGetMypage(nickname, pageInfo.pageIndex, 2);

  useEffect(() => {
    if (data && data.pageParams) {
      setPageInfo({
        pageIndex: data.pageParams.pageIndex,
        isDone: data.pageParams.isDone,
      });
    }
  }, [data, setPageInfo]);

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

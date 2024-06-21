import { getReveiwsInfo } from '@/apis/review';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetReviewInfo = (galleryId: string) => {
  return useSuspenseQuery({
    queryKey: ['reivewInfo', galleryId],
    queryFn: () => getReveiwsInfo(galleryId),
  });
};

export default useGetReviewInfo;

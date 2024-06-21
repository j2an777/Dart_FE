import { getNewToken, putMemberEditInfo } from '@/apis/member';
import { memberStore } from '@/stores/member';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const usePutMember = () => {
  const queryClient = useQueryClient();
  const setMember = memberStore((state) => state.setMember);
  return useMutation({
    mutationKey: ['edit'],
    mutationFn: async (formData: FormData) => putMemberEditInfo(formData),
    onSuccess: async () => {
      const response = await getNewToken();
      const { accessToken } = response.data;
      setMember(accessToken);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['edit'],
      });
    },
    onError: () => {},
  });
};

export default usePutMember;

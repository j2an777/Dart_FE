import { putMemberEditInfo } from '@/apis/member';
import { memberStore } from '@/stores/member';
import { EditFormData, LoginResponse } from '@/types/member';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const usePutMember = () => {
  const queryClient = useQueryClient();
  const setMember = memberStore((state) => state.setMember);
  return useMutation({
    mutationKey: ['edit'],
    mutationFn: async (formData: EditFormData) => putMemberEditInfo(formData),
    onSuccess: (data: LoginResponse) => {
      setMember(data);
      queryClient.invalidateQueries({
        queryKey: ['edit'],
      });
    },
    onError: () => {},
  });
};

export default usePutMember;

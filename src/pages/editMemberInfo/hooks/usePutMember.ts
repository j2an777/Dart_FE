import { putMemberEditInfo } from '@/apis/member';
import { alertStore } from '@/stores/modal';
import { EditFormData, LoginResponse } from '@/types/member';
import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { memberStore } from '@/stores/member';

const usePutMember = () => {
  const queryClient = useQueryClient();
  const open = alertStore((state) => state.open);
  // const setMember = memberStore((state) => state.setMember);

  return useMutation({
    mutationKey: ['edit'],
    mutationFn: async (formData: EditFormData) => putMemberEditInfo(formData),
    onSuccess: (data: LoginResponse) => {
      // setMember(data);
      open({
        title: '수정 완료',
        description: '수정이 완료되었습니다.',
        buttonLabel: '확인',
        onClickButton: () => {
          // reset();
        },
      });
      queryClient.invalidateQueries({
        queryKey: ['edit'],
      });
    },
  });
};

export default usePutMember;

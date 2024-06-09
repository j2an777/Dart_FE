import { useForm } from 'react-hook-form';
import { Text, UserCircle } from '@/components';
import * as S from './styles';
import Profile from '@/assets/images/profile.png';
import { EditFormData } from '@/types/member';
import { alertStore } from '@/stores/modal';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getMemberInfo, putMemberEditInfo } from '@/apis/member';

const EditMemberForm = () => {
  const open = alertStore((state) => state.open);
  const [uploadProfile, setUploadProfile] = useState(Profile);
  const queryClient = useQueryClient();

  const { data: editData, error, isLoading } = useQuery({
    queryKey: ['edit'],
    queryFn: ({ queryKey }) => getMemberInfo(queryKey[0])
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<EditFormData>({
    mode: 'onChange',
  });

  // 변경사항 저장에 대한 mutation
  const mutation = useMutation({
    mutationKey: ['edit'],
    mutationFn: async (formData: FormData) => putMemberEditInfo(formData),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['edit'],
      })
    },
  });

  const onSubmit = async (data: EditFormData) => {
    
    const formData = new FormData();

    formData.append('nickname', data.nickname || '');
    formData.append('introduce', data.introduce || '');

    if (data.profileImage[0]) {
      formData.append('profileImage', data.profileImage[0]);
    }

    // formData 보내기 확인. 나중에 삭제 요망
    console.log('FormData Entries:');
    formData.forEach((value, key) => {
        if (value instanceof File) {
            console.log(`${key}: [File] ${value.name}, ${value.size} bytes, ${value.type}`);
        } else {
            console.log(`${key}: ${value}`);
        }
    });
    
    try {
      await mutation.mutateAsync(formData);
      open ({
        title: '수정 완료',
        description: '수정이 완료되었습니다.',
        buttonLabel: '확인',
        onClickButton: () => {
          reset();
        },
      })
    } catch (err) {
      console.error(err);
    }
  };

  const onHandleReset = () => {
    open({
      title: '내용 초기화',
      description: '내용 삭제하시겠습니까?',
      buttonLabel: '확인',
      onClickButton: () => {
        reset();
      },
    });
  };

  const onHandleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadProfile(URL.createObjectURL(file));
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading gallery data</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.ProfileBlock>
          <S.ProfileLeft>
            <UserCircle profileImage={uploadProfile} size={150} />
            <S.ProfilePlus htmlFor="avatar-upload">
              +
              <S.ProfilePlusBtn
                {...register('profileImage')}
                type="file"
                id="avatar-upload"
                accept="image/*"
                onChange={(e) => onHandleImage(e)}
              />
            </S.ProfilePlus>
          </S.ProfileLeft>
          <S.ProfileRight>
            <Text typography="t5" bold="regular">
              아이디
            </Text>
            <Text typography="t5" bold="medium">
              {editData?.email}
            </Text>
            <Text typography="t5" bold="regular">
              나이
            </Text>
            <Text typography="t5" bold="medium">
              {`${editData?.birthday}세`}
            </Text>
          </S.ProfileRight>
        </S.ProfileBlock>
        <S.EditBlock>
          <Text typography="t5" bold="regular">
            닉네임
          </Text>
          <S.Input
            {...register('nickname')}
            type="text"
            placeholder='닉네임 입력'
            defaultValue={editData?.nickname}
          />
          {errors.nickname && <S.Error>{errors.nickname.message}</S.Error>}

          <Text typography='t5' bold='regular'>자기소개</Text>
          <S.Textarea {...register('introduce')} placeholder="자기소개 입력" defaultValue={editData?.introduce} />
          {errors.introduce && <S.Error>{errors.introduce.message}</S.Error>}

          <S.ButtonContainer>
            <S.CancelBtn type="button" onClick={onHandleReset}>
              취소
            </S.CancelBtn>
            <S.StoreBtn type="submit">변경사항 저장</S.StoreBtn>
          </S.ButtonContainer>
        </S.EditBlock>
      </S.Container>
    </form>
  );
};

export default EditMemberForm;
import { useForm } from 'react-hook-form';
import { Text, UserCircle } from '@/components';
import * as S from './styles';
import { EditFormData } from '@/types/member';
import { alertStore } from '@/stores/modal';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getMemberInfo, postCheckNickname, putMemberEditInfo } from '@/apis/member';
import { memberStore } from '@/stores/member';
import BasicProfile from '@/assets/images/defaultUser.png';
import { useState } from 'react';
import axios from 'axios';

const EditMemberForm = () => {
  const open = alertStore((state) => state.open);
  const queryClient = useQueryClient();
  const { auth: { nickname } } = memberStore();
  const [nicknameError, setNicknameError] = useState('');
  const [profileImageSrc, setProfileImageSrc] = useState<string | undefined>(BasicProfile);

  const { data: editData, error, isLoading } = useQuery({
    queryKey: ['edit'],
    queryFn: () => getMemberInfo(nickname)
  });

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue
  } = useForm<EditFormData>({
    mode: 'onChange',
    defaultValues: {
      isCheckedNickname: false,
    }
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

  // 변경사항 저장 
  const onSubmit = async (data: EditFormData) => {
    const formData = new FormData();
    const jsonData = {
      nickname: data.nickname || '',
      introduce: data.introduce || '',
      isCheckedNickname: data.isCheckedNickname,
    };

    formData.append('memberUpdateDto', JSON.stringify(jsonData));
    if (data.profileImage) {
      formData.append('profileImage', data.profileImage);
    }
    
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

  const onHandleCheck = async () => {
    const nicknameValue = getValues('nickname');

    if (nicknameValue) {
        const formData = { nickname: nicknameValue };

        try {
          await postCheckNickname(formData)
            .then(() => {
              setValue('isCheckedNickname', true);
              setNicknameError('사용 가능한 닉네임입니다.');
            })
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 409) {
              setNicknameError('이미 존재하는 닉네임입니다.');
            }
        }
    } else {
        console.error('Nickname value is undefined');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImageSrc(reader.result as string);
        setValue('profileImage', file);
      };
      reader.readAsDataURL(file);
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
            <UserCircle profileImage={profileImageSrc} size={150} />
            <S.ProfilePlus htmlFor="avatar-upload">
              +
              <S.ProfilePlusBtn
                {...register('profileImage')}
                type="file"
                id="avatar-upload"
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
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
          <S.NicknameBox>
            <Text typography="t5" bold="regular">
              닉네임
            </Text>
            <S.Input
              {...register('nickname')}
              type="text"
              placeholder='닉네임 입력'
              defaultValue={editData?.nickname}
            />
            <S.CheckBtn type="button" onClick={onHandleCheck}>중복 확인</S.CheckBtn>
            {nicknameError && <S.Error nicknameError={nicknameError}>{nicknameError}</S.Error>}
          </S.NicknameBox>

          <S.IntroduceBox>
            <Text typography='t5' bold='regular'>자기소개</Text>
            <S.Textarea {...register('introduce')} placeholder="자기소개 입력" defaultValue={editData?.introduce} />
          </S.IntroduceBox>

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
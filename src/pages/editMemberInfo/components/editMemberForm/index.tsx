import axios from 'axios';
import { useForm } from 'react-hook-form';
import { alertStore } from '@/stores/modal';
import { useState, useEffect } from 'react';
import { EditFormData } from '@/types/member';
import { memberStore } from '@/stores/member';
import { CircleLoader, Text, UserCircle } from '@/components';
import { useQuery } from '@tanstack/react-query';
import usePutMember from '../../hooks/usePutMember';
import BasicProfile from '@/assets/images/defaultUser.png';
import { getMemberInfo, postCheckNickname } from '@/apis/member';

import * as S from './styles';
import ErrorData from '../errorData';
import { calculateAge } from '@/utils/calcuateAge';

const EditMemberForm = () => {
  const open = alertStore((state) => state.open);
  const { mutate } = usePutMember();
  const {
    auth: { nickname },
  } = memberStore();
  const [nicknameError, setNicknameError] = useState('');
  const [profileImageSrc, setProfileImageSrc] = useState<string | undefined>(BasicProfile);
  const [age, setAge] = useState<string>('정보 없음');

  const {
    data: editData,
    error,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['edit'],
    queryFn: () => getMemberInfo(nickname),
  });

  useEffect(() => {
    if (editData?.profileImage) {
      setProfileImageSrc(editData.profileImage);
    }
    if (editData?.birthday) {
      const birthdayString = editData.birthday.toString();
      const newAge = birthdayString === '1997-01-07' ? '정보 없음' : calculateAge(birthdayString).toString();
      setAge(newAge);
    } else {
      setAge('정보 없음');
    }
  }, [editData]);

  const { register, handleSubmit, reset, getValues, setValue } = useForm<EditFormData>({
    mode: 'onChange',
  });

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
        await postCheckNickname(formData).then(() => {
          setNicknameError('사용 가능한 닉네임입니다.');
        });
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
      reader.onload = (event) => {
        if (reader.readyState === 2 && event.target) {
          const imageUrl = event.target.result;
          setProfileImageSrc(imageUrl as string);
        }

        setValue('profileImage', file);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isLoading) {
    return <CircleLoader />;
  }

  if (error) {
    return <ErrorData retry={refetch} />;
  }

  return (
    <S.Container onSubmit={handleSubmit((formData: EditFormData) => mutate(formData))}>
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
              onChange={handleImageChange}
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
            {age} 세
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
            placeholder="닉네임 입력"
            defaultValue={editData?.nickname}
          />
          <S.CheckBtn type="button" onClick={onHandleCheck}>
            중복 확인
          </S.CheckBtn>
          {nicknameError && (
            <S.Error nicknameError={nicknameError}>{nicknameError}</S.Error>
          )}
        </S.NicknameBox>

        <S.IntroduceBox>
          <Text typography="t5" bold="regular">
            자기소개
          </Text>
          <S.Textarea
            {...register('introduce')}
            placeholder="자기소개 입력"
            defaultValue={editData?.introduce}
          />
        </S.IntroduceBox>

        <S.ButtonContainer>
          <S.CancelBtn type="button" onClick={onHandleReset}>
            취소
          </S.CancelBtn>
          <S.StoreBtn type="submit">변경사항 저장</S.StoreBtn>
        </S.ButtonContainer>
      </S.EditBlock>
    </S.Container>
  );
};

export default EditMemberForm;

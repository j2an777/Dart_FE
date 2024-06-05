import { useForm } from 'react-hook-form';
import { Text } from '@/components';
import * as S from './styles';
import Profile from '@/assets/images/profile.png';
import { EditFormData } from '@/types/member';
import postMemberEditInfo from '../../hooks/postMemberEditInfo';
import { alertStore } from '@/stores/alert';

const EditMemberForm = () => {
  const open = alertStore((state) => state.open);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditFormData>();

  const onSubmit = (data: EditFormData) => {
    console.log(data);
    postMemberEditInfo(data);
  };

  const onHandleReset = () => {
    open({
      title: '내용 초기화',
      description: '내용 삭제하시겠습니까?',
      buttonLabel: '확인',
      onClickButton: () => {
        // field 내용들 초기화
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.ProfileBlock>
          <S.ProfileLeft>
            <img src={Profile} alt="Profile" />
            <S.ProfilePlus htmlFor="avatar-upload">
              +
              <S.ProfilePlusBtn 
                {...register('profileImage')}
                type="file" 
                id="avatar-upload"
                accept="image/*"
              />
            </S.ProfilePlus>
          </S.ProfileLeft>
          <S.ProfileRight>
            <Text typography='t5' bold='regular'>아이디</Text>
            <Text typography='t5' bold='medium'>dart123@gmail.com</Text>
            <Text typography='t5' bold='regular'>나이</Text>
            <Text typography='t5' bold='medium'>21세</Text>
          </S.ProfileRight>
        </S.ProfileBlock>
        <S.EditBlock>
          <Text typography='t5' bold='regular'>닉네임</Text>
          <S.Input {...register('nickname', { required: '닉네임을 입력해주세요.' })} type="text" />
          {errors.nickname && <S.Error>{errors.nickname.message}</S.Error>}

          <Text typography='t5' bold='regular'>은행</Text>
          <S.Input {...register('bank')} type="text" placeholder='국민은행'/>
          {errors.bank && <S.Error>{errors.bank.message}</S.Error>}

          <Text typography='t5' bold='regular'>계좌번호</Text>
          <S.Input {...register('account', { required: '계좌번호를 입력해주세요.' })} type="text" placeholder='000000-00000000'/>
          {errors.account && <S.Error>{errors.account.message}</S.Error>}

          <S.Textarea {...register('introduce')} placeholder='자기소개 입력'/>
          {errors.introduce && <S.Error>{errors.introduce.message}</S.Error>}

          <S.ButtonContainer>
            <S.CancelBtn type="button" onClick={onHandleReset}>취소</S.CancelBtn>
            <S.StoreBtn type="submit">변경사항 저장</S.StoreBtn>
          </S.ButtonContainer>
        </S.EditBlock>
      </S.Container>
    </form>
  );
}

export default EditMemberForm;

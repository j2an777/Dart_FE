import { Text } from '@/components';
import * as S from './styles';
import Profile from '@/assets/images/profile.png';

const EditMemberForm = () => {
  return (
    <S.Container>
      <S.ProfileBlock>
        <S.ProfileLeft>
          <img src={Profile} />
          <S.ProfilePlus htmlFor="avatar-upload">
            +
            <S.ProfilePlusBtn 
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
        <S.Input type="text" />

        <Text typography='t5' bold='regular'>은행</Text>
        <S.Input type="text" value="" placeholder='국민은행'/>

        <Text typography='t5' bold='regular'>계좌번호</Text>
        <S.Input type="text" value="" placeholder='000000-00000000'/>

        <S.Textarea placeholder='자기소개 입력'/>

        <S.ButtonContainer>
          <S.CancelBtn>취소</S.CancelBtn>
          <S.StoreBtn>변경사항 저장</S.StoreBtn>
        </S.ButtonContainer>
      </S.EditBlock>
    </S.Container>
  )
}

export default EditMemberForm
import { Button, Text, UserCircle } from '..';
import { navbarInfo, userBoxInfo } from '@/consts/navbar';
import mainlogo from '@/assets/images/mainLogo.png';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { memberStore } from '@/stores/member';
import useOutsideClick from '@/hooks/useOutsideClick';

import * as S from './styles';

const Navbar = () => {
  const navigate = useNavigate();
  const {
    logout,
    accessToken,
    auth: { nickname, profileImage },
  } = memberStore();
  return (
    <>
      <S.Container>
        <S.MaxWidthWrapper>
          <S.MainLogo alt="main-logo" src={mainlogo} />
          <S.ButtonBox>
            {navbarInfo.map(({ path, value }, index) => {
              if (value === '로그인') {
                return accessToken ? (
                  <UserBox
                    key={index}
                    logout={logout}
                    nickname={nickname}
                    profileImage={profileImage}
                  />
                ) : (
                  <Button
                    buttonType="rectangleBlack"
                    key={index}
                    size="xs"
                    bold="regular"
                    onClick={() => navigate(path)}
                  >
                    {value}
                  </Button>
                );
              }
              return (
                <Link key={index} to={path}>
                  <Text typography="t7" bold="regular">
                    {value}
                  </Text>
                </Link>
              );
            })}
          </S.ButtonBox>
        </S.MaxWidthWrapper>
      </S.Container>
      <Outlet />
    </>
  );
};

export default Navbar;

interface UserBoxProps {
  logout: () => void;
  nickname: string;
  profileImage: string;
}

const UserBox = ({ logout, nickname, profileImage }: UserBoxProps) => {
  const navigate = useNavigate();
  const { isExpand, onToggle, ref } = useOutsideClick();
  return (
    <S.UserBoxContainer ref={ref} onClick={onToggle}>
      <UserCircle size={15} profileImage={profileImage} />
      <Text typography="t7" bold="regular" ellipsis={50}>
        {nickname}
      </Text>
      {isExpand && (
        <S.MoreBox>
          {userBoxInfo.map(({ path, value }, index) => {
            const onClickItem = () => {
              if (value === '로그아웃') {
                logout();
                location.reload();
              } else {
                navigate(path);
              }
            };
            return (
              <S.MoreItem
                key={value}
                typography="t7"
                bold="regular"
                isLast={index === userBoxInfo.length - 1}
                onMouseDown={onClickItem}
              >
                {value}
              </S.MoreItem>
            );
          })}
        </S.MoreBox>
      )}
    </S.UserBoxContainer>
  );
};

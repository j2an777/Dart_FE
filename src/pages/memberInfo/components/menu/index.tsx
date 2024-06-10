import { useEffect, useState } from 'react';
import { Exhibition, Payment } from '../index';
import * as S from './styles';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState('exhibition');
  const renderContent = () => {
    switch (selectedMenu) {
      case 'exhibition':
        return <Exhibition />;
      case 'purchase':
        return <Payment />;
    }
  };

  useEffect(() => {});
  return (
    <S.Container>
      <S.MenuBox>
        <S.MenuBlock
          isActive={selectedMenu === 'exhibition'}
          onClick={() => setSelectedMenu('exhibition')}
        >
          전시
        </S.MenuBlock>
        <S.MenuBlock
          isActive={selectedMenu === 'purchase'}
          onClick={() => setSelectedMenu('purchase')}
        >
          구매
        </S.MenuBlock>
      </S.MenuBox>
      {renderContent()}
    </S.Container>
  );
};

export default Menu;

import { useState } from 'react';
import { Exhibition, Purchase } from '../index';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import { memberStore } from '@/stores/member';

const Menu = () => {
  const [currentTab, setCurrentTab] = useState('exhibition');
  const { nickname } = memberStore((state) => state.auth);
  const { memberId } = useParams<{ memberId: string }>();

  const tabs = [
    { id: 'exhibition', label: '전시', component: Exhibition },
    ...(memberId == null || memberId === nickname
      ? [{ id: 'purchase', label: '구매', component: Purchase }]
      : []),
  ];

  const renderContent = () => {
    const activeTab = tabs.find((tab) => tab.id === currentTab);
    if (activeTab) {
      const Component = activeTab.component;
      return <Component />;
    }
  };

  return (
    <S.Container>
      <S.MenuBox>
        {tabs.map((tab) => (
          <S.MenuBlock
            key={tab.id}
            isActive={currentTab === tab.id}
            onClick={() => setCurrentTab(tab.id)}
          >
            {tab.label}
          </S.MenuBlock>
        ))}
      </S.MenuBox>
      {renderContent()}
    </S.Container>
  );
};

export default Menu;

import { Button } from '@/components';
import { alertStore } from '@/stores/alert';

const MainPage = () => {
  const open = alertStore((state) => state.open);
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <Button
        onClick={() =>
          open({
            title: '결제',
            description: '아무말이나 해봐',
            onClickButton: () => {},
          })
        }
      >
        portal on
      </Button>
    </div>
  );
};

export default MainPage;

import { alertStore } from '@/stores/alert';

const MainPage = () => {
  const openAlert = alertStore((state) => state.openAlert);
  return (
    <div>
      <button onClick={openAlert}>portal on</button>
    </div>
  );
};

export default MainPage;

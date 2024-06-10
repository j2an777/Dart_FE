import Ticket from './Ticket';
import * as S from './styles';

const Exhibition = () => {
  return (
    <S.Container>
      <Ticket
        thumbnail={'images.png'}
        title={'전시제목'}
        startDate={new Date()}
        endDate={new Date()}
        fee={5000}
        hashtags={['안녕', '하세요', '재밌어요', '멋져요', '와우우우우']}
      />
    </S.Container>
  );
};

export default Exhibition;

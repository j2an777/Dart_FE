import { Text } from '@/components';
import * as S from './styles';

export const Guide = () => {
  return (
    <S.Container>
      <S.Box>
        <Text typography="t5">1. 작품 개수</Text>
        <Text typography="t5" bold="regular">
          최소 3개, 최대 20개까지 등록 가능합니다.
        </Text>
      </S.Box>

      <S.Box>
        <Text typography="t5">2. 파일 형식 및 크기</Text>
        <Text typography="t5" bold="regular">
          10MB 미만의 JPG, JPEG, PNG 파일만 업로드 가능합니다.
        </Text>
      </S.Box>

      <S.Box>
        <Text typography="t5">3. 작품 정보 작성</Text>
        <Text typography="t5" bold="regular">
          각 작품에 대한 제목과 설명을 작성해주세요.
        </Text>
      </S.Box>

      <S.Box>
        <Text typography="t5">4. 작품 추가</Text>
        <Text typography="t5" bold="regular">
          모든 정보를 입력한 후, [등록] 버튼을 클릭하여 작품을 추가하세요. 하단에 작품
          리스트가 생성됩니다.
        </Text>
      </S.Box>

      <S.Box>
        <Text typography="t5">5. 작품 순서 조정</Text>
        <Text typography="t5" bold="regular">
          최상단 작품부터 순서대로 전시가 이루어집니다. 리스트를 드래그하여 원하는 순서로
          조정하세요.
        </Text>
      </S.Box>
    </S.Container>
  );
};

export default Guide;

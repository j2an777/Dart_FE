import { Dimmed } from '@/components';
import * as S from './styles';

interface ProgressProps {
    progress: number;
}

const ProgressModal = ({ progress }: ProgressProps) => {
  return (
    <Dimmed>
        <S.Container>
            <S.CircularProgress $progress={progress}>
                <S.ProgressValue>{progress}%</S.ProgressValue>
            </S.CircularProgress>
            <S.ProgressText>{progress <= 50 ? '로딩 중...' : '저장 중...'}</S.ProgressText>
        </S.Container>
    </Dimmed>
  )
}

export default ProgressModal
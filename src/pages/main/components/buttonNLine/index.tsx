import { PostButton } from '..'
import * as S from './styles'

const ButtonNLine = () => {
  return (
    <S.Container>
      <PostButton />      
      <S.Line>
        <S.BottomText typography="t7" bold="regular">
          EXHIBITIONS
        </S.BottomText>
      </S.Line>
    </S.Container>
  )
}

export default ButtonNLine

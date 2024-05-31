import * as S from './styles';

type InputBoxProps = {
  placeholder: string;
  width?: number;
  height?: number;
};

const InputBox = ({ placeholder, width, height }: InputBoxProps) => {
  return <S.Input placeholder={placeholder} width={width} height={height} />;
};

export default InputBox;

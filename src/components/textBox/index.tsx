import * as S from './styles';

type TextBoxProps = {
  placeholder: string;
  width?: number;
  height?: number;
};

const TextBox = ({ placeholder, width, height }: TextBoxProps) => {
  return <S.Textarea placeholder={placeholder} width={width} height={height} />;
};

export default TextBox;

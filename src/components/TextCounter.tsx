import Text from './Text';

interface Props {
  textLength: number;
  maxLength: number;
}

const TextCounter = ({ textLength, maxLength }: Props) => {
  return (
    <div>
      <Text typography="t7" bold="regular" color="gray400">
        {textLength} / {maxLength} 자
      </Text>
    </div>
  );
};

export default TextCounter;

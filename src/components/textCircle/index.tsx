import { useEffect, useRef } from 'react';
import Text from '../Text';
import * as S from './styles';

type TextCircleProps = {
  name: string;
  size: number;
};

const TextCircle = ({ name, size }: TextCircleProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const chars = textElement.innerText.split('');
      textElement.innerHTML = chars
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * (360 / chars.length)}deg)">${char}</span>`,
        )
        .join('');
    }
  }, [name]);

    return (
        <S.Container>
            <S.Circle size={size}>
                <Text 
                    ref={textRef}
                    typography='t6' 
                    color='black' 
                    bold='semibold'>
                        {name}
                </Text>
            </S.Circle>
        </S.Container>
    )
}

export default TextCircle;

import { Button, Icon, Text } from '@/components';
import { alertStore } from '@/stores/modal';
import * as S from './styles';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface CheckAgreeProps {
  title: string;
  isTotal?: boolean;
  isLast?: boolean;
  checked?: boolean;
  onClick?: (value: string) => void;
  value: string;
  description?: string;
}

const CheckAgree = ({
  title,
  isTotal = false,
  isLast = false,
  checked = false,
  onClick = () => {},
  value,
  description,
}: CheckAgreeProps) => {
  const open = alertStore((state) => state.open);
  return (
    <S.Container isLast={isLast} isTotal={isTotal}>
      <Icon
        value="check"
        color={checked ? 'white' : 'gray400'}
        onClick={() => onClick(value)}
      />
      <Text bold="regular" color="white" typography="t4">
        {title}
      </Text>
      {!isTotal && (
        <Button
          buttonType="reverseRectangleWhite"
          size="xs"
          type="button"
          onClick={() =>
            open({
              title,
              buttonLabel: '내용 접기',
              description: (
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown>
              ),
              onClickButton: () => {},
            })
          }
        >
          이용약관
        </Button>
      )}
    </S.Container>
  );
};

export default CheckAgree;

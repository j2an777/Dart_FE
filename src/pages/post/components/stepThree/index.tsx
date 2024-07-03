import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import template1 from '@/assets/images/template1.png';
import template2 from '@/assets/images/template2.png';
import template3 from '@/assets/images/template3.png';
import template4 from '@/assets/images/template4.png';
import { Icon, Text } from '@/components';
import { IconValues } from '@/components/icon';
import * as S from './styles';

type TemplateType =
  | typeof template1
  | typeof template2
  | typeof template3
  | typeof template4;

const templates = [
  { value: template1, iconValue: 'template1' as IconValues },
  { value: template2, iconValue: 'template2' as IconValues },
  { value: template3, iconValue: 'template3' as IconValues },
  { value: template4, iconValue: 'template4' as IconValues },
];

const StepTree = () => {
  const { setValue } = useFormContext();
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(template1);
  setValue('gallery.template', 'one');

  useEffect(() => {
    let templateType: 'one' | 'two' | 'three' | 'four';

    switch (selectedTemplate) {
      case template1:
        templateType = 'one';
        break;
      case template2:
        templateType = 'two';
        break;
      case template3:
        templateType = 'three';
        break;
      case template4:
        templateType = 'four';
        break;
      default:
        templateType = 'one';
        break;
    }

    setValue('gallery.template', templateType);
  }, [selectedTemplate, setValue]);

  const onTemplateClick = (
    template: TemplateType,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setSelectedTemplate(template);
  };

  return (
    <S.Container>
      <S.Step>
        <Icon value="step_three" $active={false} />
        <Text>템플릿을 선택하세요.</Text>
      </S.Step>
      <S.TemplateBox>
        <S.TemplateBlock>
          <S.Title>템플릿을 선택하세요.</S.Title>
          <S.Image src={selectedTemplate} />
          <S.Content typography="t6" bold="regular" color="gray600">
            전시관 미리보기
          </S.Content>
        </S.TemplateBlock>

        <article>
          {templates.map((template, index) => (
            <S.Box key={index}>
              <S.Block>
                <Icon value={template.iconValue} $active={false} />
              </S.Block>
              <S.CheckBtn
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  onTemplateClick(template.value, e)
                }
                className={selectedTemplate === template.value ? 'selected' : ''}
              >
                {selectedTemplate === template.value && <S.Checked />}
              </S.CheckBtn>
            </S.Box>
          ))}
        </article>
      </S.TemplateBox>
    </S.Container>
  );
};

export default StepTree;

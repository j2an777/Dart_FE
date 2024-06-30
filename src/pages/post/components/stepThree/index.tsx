import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import template1 from '@/assets/images/template1.png';
import template2 from '@/assets/images/template2.png';
import template3 from '@/assets/images/template3.png';
import template4 from '@/assets/images/template4.png';
import { Icon } from '@/components';
import { IconValues } from '@/components/icon';
import * as S from './styles';
import Address from '../address';

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

  const onTemplateClick = (
    template: TemplateType,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setSelectedTemplate(template);

    let templateType: 'one' | 'two' | 'three' | 'four';

    switch (template) {
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
  };

  return (
    <S.Container>
      <S.Step value="step_three" $active={false} />
      <S.StepContent typography='t3' color='black' bold='semibold'>원하시는 템플릿을 고르세요!</S.StepContent>
      <S.TemplatePreview>
        <S.Image src={selectedTemplate} />
        <S.Content typography="t6" bold="regular" color="gray600">
          전시관 미리보기
        </S.Content>
      </S.TemplatePreview>
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
      <Address />
    </S.Container>
  );
};

export default StepTree;

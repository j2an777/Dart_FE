import { useState, useEffect, KeyboardEvent, ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { StyledTagsInput } from './styles';

interface TagsProps {
  name: string;
}

const TagsInput = ({ name }: TagsProps) => {
  const { setValue, getValues } = useFormContext();
  const [tags, setTags] = useState<string[]>(getValues(name) || []);

  useEffect(() => {
    setValue(name, tags);
  }, [tags, setValue, name]);

  const removeTags = (indexToRemove: number) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
  };

  const addTags = (event: KeyboardEvent<HTMLInputElement>) => {
    let inputVal = (event.target as HTMLInputElement).value;

    // 띄어쓰기 제거
    inputVal = inputVal.replace(/\s+/g, '');

    // keyDown 이벤트 오류(한글 2번 입력됨) 해결
    if (event.nativeEvent.isComposing) {
      return;
    }

    if (
      event.key === 'Enter' &&
      inputVal !== '' &&
      !tags.includes(inputVal) &&
      inputVal.length <= 10 &&
      tags.length < 5
    ) {
      event.preventDefault();
      const newTags = [...tags, inputVal];
      setTags(newTags);
      (event.target as HTMLInputElement).value = '';
    } else if (event.key === 'Enter' && tags.includes(inputVal)) {
      event.preventDefault();
    }
  };

  // 10자 제한
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if ((event.target as HTMLInputElement).value.length > 10) {
      (event.target as HTMLInputElement).value = (
        event.target as HTMLInputElement
      ).value.slice(0, 10);
    }
  };

  return (
    <StyledTagsInput>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            <p>#{tag}</p>
            <button onClick={() => removeTags(index)}>x</button>
          </li>
        ))}
        {tags.length < 5 && (
          <li>
            <span>#</span>
            <input
              type="text"
              onKeyDown={addTags}
              onInput={handleInput}
              placeholder="태그입력 Enter"
            />
          </li>
        )}
      </ul>
    </StyledTagsInput>
  );
};

export default TagsInput;

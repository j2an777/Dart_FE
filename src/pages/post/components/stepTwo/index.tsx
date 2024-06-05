import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import Text from '@/components/Text';
import DropZone from '@/components/dropZone';
import { alertStore } from '@/stores/alert';
import { Item } from '@/types/post';
import { InputBox, TextBox } from '../inputs/styles';
import * as S from './styles';

const StepTwo = () => {
  const open = alertStore((state) => state.open);
  const { setValue } = useFormContext();
  const [gallery, setGallery] = useState<Item[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [imageTitle, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const onFileDrop = (file: File) => {
    setImage(file);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const newGallery = Array.from(gallery);
    const [movedItem] = newGallery.splice(result.source.index, 1);
    newGallery.splice(result.destination.index, 0, movedItem);
    setGallery(newGallery);
    setValue('Images', newGallery);
  };

  const addItem = () => {
    if (!image || !imageTitle || !description) {
      open({
        title: '등록 오류',
        description: '모든 정보를 입력해주세요.',
        buttonLabel: '확인',
        onClickButton: () => {},
      });
      return;
    }

    if (gallery.length < 20) {
      const newGallery = [...gallery, { image, imageTitle, description }];
      setGallery(newGallery);
      setImage(null);
      setTitle('');
      setDescription('');
      setValue('Images', newGallery);
    } else {
      open({
        title: '작품 등록',
        description: '작품은 최대 20개까지만 등록 가능합니다.',
        buttonLabel: '확인',
        onClickButton: () => {},
      });
    }
  };

  return (
    <S.Container>
      <S.Step>02</S.Step>
      <S.Box>
        <Text typography="t5" bold="regular">
          작품 리스트(최대 20개)
        </Text>
        <S.BorderLine />
        <S.Block>
          <section>
            <DropZone onFileUpload={onFileDrop} />
          </section>
          <article>
            <InputBox
              placeholder="작품 제목을 입력해주세요."
              value={imageTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextBox
              placeholder="작품 설명을 입력해주세요."
              height={150}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </article>
        </S.Block>
        <S.Buttons>
          <button onClick={addItem}>등록</button>
          <button
            onClick={() => {
              setImage(null);
              setTitle('');
              setDescription('');
            }}
          >
            취소
          </button>
        </S.Buttons>
      </S.Box>
      <S.BorderLine />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="galleries">
          {(provided) => (
            <S.ListBox ref={provided.innerRef} {...provided.droppableProps}>
              {gallery.length === 0 ? (
                <a>
                  등록된 작품이 없습니다.
                  <br /> 작품을 등록해주세요.
                </a>
              ) : (
                gallery.map((item, index) => (
                  <Draggable key={index} draggableId={index.toString()} index={index}>
                    {(provided) => (
                      <S.ListBlock ref={provided.innerRef} {...provided.draggableProps}>
                        <S.ListHandle {...provided.dragHandleProps}>
                          <p />
                          <p />
                          <p />
                        </S.ListHandle>
                        <S.ListItem>
                          {item.image && (
                            <S.Block>
                              <img
                                src={URL.createObjectURL(item.image)}
                                alt="preview"
                                width={100}
                                height={100}
                              />
                              <p>{item.image.name}</p>
                            </S.Block>
                          )}
                          <div>{item.imageTitle}</div>
                          <p>{item.description}</p>
                          <button
                            onClick={() => {
                              const newGallery = gallery.filter((_, i) => i !== index);
                              setGallery(newGallery);
                              setValue('Images', newGallery);
                            }}
                          >
                            삭제
                          </button>
                        </S.ListItem>
                      </S.ListBlock>
                    )}
                  </Draggable>
                ))
              )}
              {provided.placeholder}
            </S.ListBox>
          )}
        </Droppable>
      </DragDropContext>
    </S.Container>
  );
};

export default StepTwo;

import { useState } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Text from '@/components/Text';
import DropZone from '@/components/dropZone';
import { InputBox, TextBox } from '../../styles';
import * as S from './styles';
import { alertStore } from '@/stores/modal';

interface Item {
  image: File | null;
  title: string;
  description: string;
}

const StepTwo = () => {
  const open = alertStore((state) => state.open);
  const { control, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray<Item>({
    control,
    name: 'items',
  });

  const onSubmit = (data: Item) => {
    if (fields.length < 20) {
      append({ data });
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
          <S.Image>
            <DropZone />
          </S.Image>
          <S.Form>
            <Controller
              name="img-title"
              control={control}
              render={({ field }) => (
                <InputBox placeholder="작품 제목을 입력해주세요." {...field} />
              )}
            />
            <Controller
              name="img-description"
              control={control}
              render={({ field }) => (
                <TextBox
                  placeholder="작품 설명을 입력해주세요."
                  height={150}
                  {...field}
                />
              )}
            />
          </S.Form>
        </S.Block>
        <S.Buttons>
          <S.Button onClick={onSubmit}>등록</S.Button>
          <S.Button onClick={() => {}}>취소</S.Button>
        </S.Buttons>
      </S.Box>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields.map((item, index) => (
                <Draggable key={item.id} draggableId={`item-${item.id}`} index={index}>
                  {(provided) => (
                    <S.ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.image && (
                        <img
                          src={URL.createObjectURL(item.image)}
                          alt="preview"
                          width={100}
                          height={100}
                        />
                      )}
                      <div>{item.title}</div>
                      <p>{item.description}</p>
                      <button onClick={() => remove(index)}>삭제</button>
                    </S.ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </S.Container>
  );
};

export default StepTwo;

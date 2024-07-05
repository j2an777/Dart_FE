import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Icon from '../icon';
import Text from '@/components/Text';
import * as S from './styles';
import { alertStore } from '@/stores/modal';

interface FileWithPreview extends File {
  preview: string;
}

interface DropZoneProps {
  info?: string;
  onFileUpload: (file: FileWithPreview) => void;
  clearFiles?: boolean;
}

const DropZone = ({ info, onFileUpload, clearFiles }: DropZoneProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const open = alertStore((state) => state.open);
  const checkFileSize = (file: File) => {
    const MAX_SIZE = 10 * 1024 * 1024; // 10MB
    if (file.size > MAX_SIZE) {
      open({
        title: '등록 불가',
        description:
          '파일 크기가 10MB를 초과했습니다. 10MB 이하의 파일만 등록 가능합니다.',
        buttonLabel: '확인',
        buttonCancelLabel: '취소',
        onClickButton: () => {
          close();
        },
        onClickCancelButton: () => {
          close();
        },
      });
      return false;
    }
    return true;
  };

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/png': [],
      'image/jpeg': [],
      'image/jpg': [],
    },
    onDrop: (acceptedFiles: File[]) => {
      const validFiles = acceptedFiles.filter(checkFileSize);
      if (validFiles.length === 0) return;
      const previewFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );
      setFiles(previewFiles);
      onFileUpload(previewFiles[0]);
    },
  });

  useEffect(() => {
    if (clearFiles) {
      setFiles([]);
    }
  }, [clearFiles]);

  const thumbs = files.map((file) => (
    <S.Block key={file.name}>
      <S.Img
        src={file.preview}
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
    </S.Block>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <S.Container {...getRootProps()}>
      <input {...getInputProps()} />
      {thumbs.length === 0 ? (
        <S.Block>
          <Icon value="image" size={100} />
          <Text typography="t6" bold="regular">
            이미지를 누르거나 파일을 가져다 놓으세요.
          </Text>
          {info && (
            <Text typography="t6" bold="regular" color="gray400">
              {info}
            </Text>
          )}
        </S.Block>
      ) : (
        <S.Container>{thumbs}</S.Container>
      )}
    </S.Container>
  );
};

export default DropZone;

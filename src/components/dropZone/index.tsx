import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Icon from '../icon';
import Text from '@/components/Text';
import * as S from './styles';

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
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/png': [],
      'image/jpeg': [],
      'image/jpg': [],
    },
    onDrop: (acceptedFiles: File[]) => {
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

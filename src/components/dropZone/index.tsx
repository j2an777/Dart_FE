import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as S from './styles';

interface FileWithPreview extends File {
  preview: string;
}

const DropZone = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

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
        <div>
          <p>imag icon</p>
          <p>이미지를 누르거나 파일을 가져다 놓으세요.</p>
        </div>
      ) : (
        <S.Container>{thumbs}</S.Container>
      )}
    </S.Container>
  );
};

export default DropZone;

//https://react-dropzone.js.org/

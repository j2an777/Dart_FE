import { Dispatch, SetStateAction, ChangeEvent, useCallback, useState } from 'react';

export const useInput = <T>(
  initialState: T,
): [
  T,
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  Dispatch<SetStateAction<T>>,
] => {
  const [form, setForm] = useState<T>(initialState);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value as unknown as T;
      const name = event.target.name;
      const newValue = {
        ...value,
        [name]: value,
      };
      setForm(newValue);
    },
    [setForm],
  );
  return [form, onChange, setForm];
};

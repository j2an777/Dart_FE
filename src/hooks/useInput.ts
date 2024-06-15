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
        ...form,
        [name]: value,
      };
      setForm(newValue);
    },
    [form],
  );
  return [form, onChange, setForm];
};

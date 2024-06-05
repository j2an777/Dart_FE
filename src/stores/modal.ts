import { Alert } from '@/components';
import { ComponentProps } from 'react';
import { create } from 'zustand';

interface AlertState {
  alertValue: ModalProps;
  open: (form: Omit<ModalProps, 'open'>) => void;
  close: () => void;
}
type ModalProps = ComponentProps<typeof Alert>;

const defaultValue: ModalProps = {
  open: false,
  title: null,
};

export const alertStore = create<AlertState>((set, get) => ({
  alertValue: defaultValue,
  open: (form: Omit<ModalProps, 'open'>) =>
    set((state) => ({
      ...state,
      alertValue: {
        ...form,
        onClickButton: () => {
          form.onClickButton?.();
          get().close();
        },
        open: true,
      },
    })),
  close: () =>
    set((state) => ({
      ...state,
      alertValue: defaultValue,
    })),
}));

export interface GalleryInfoState {
  value: boolean;
  open: () => void;
  close: () => void;
}

export const galleryInfoStore = create<GalleryInfoState>((set) => ({
  value: false,
  open: () => set((state) => ({ ...state, value: true })),
  close: () => set((state) => ({ ...state, value: false })),
}));

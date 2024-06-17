import { Alert } from '@/components';
import { GalleryInfo } from '@/pages/main/components';
import { CheckModal } from '@/pages/signup/components';
import { ComponentProps } from 'react';
import { create } from 'zustand';

interface AlertModalState {
  alertValue: AlertModalProps;
  open: (form: Omit<AlertModalProps, 'open'>) => void;
  close: () => void;
}
type AlertModalProps = ComponentProps<typeof Alert>;

const defaultValue = {
  open: false,
  title: null,
};

export const alertStore = create<AlertModalState>((set, get) => ({
  alertValue: defaultValue,
  open: (form: Omit<AlertModalProps, 'open'>) =>
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

// 전시 상세 모달
type GalleryInfoProps = Omit<ComponentProps<typeof GalleryInfo>, 'close'>;

export interface GalleryInfoState {
  galleryInfoValue: GalleryInfoProps;
  open: (galleryId: number) => void;
  close: () => void;
}

const galleryInfoDefaultValue: GalleryInfoProps = {
  galleryId: null,
  open: false,
};

export const galleryInfoStore = create<GalleryInfoState>((set) => ({
  galleryInfoValue: galleryInfoDefaultValue,
  open: (galleryId: number) =>
    set((state) => ({ ...state, galleryInfoValue: { open: true, galleryId } })),
  close: () => set((state) => ({ ...state, galleryInfoValue: galleryInfoDefaultValue })),
}));

// 채팅 모달
interface ChatState {
  chatValue: { open: boolean };
  open: () => void;
  close: () => void;
}

export const chatStore = create<ChatState>((set) => ({
  chatValue: { open: false },
  open: () => set({ chatValue: { open: true } }),
  close: () => set({ chatValue: { open: false } }),
}));

type CheckModalProps = ComponentProps<typeof CheckModal>;

interface CheckModalState {
  checkModalValue: CheckModalProps;
  open: (form: Omit<CheckModalProps, 'open'>) => void;
  close: () => void;
}

// 회원가입 체크 모달
export const checkModalStore = create<CheckModalState>((set) => ({
  checkModalValue: defaultValue,
  open: (form: Omit<CheckModalProps, 'open'>) =>
    set((state) => ({
      ...state,
      checkModalValue: {
        ...form,
        open: true,
      },
    })),
  close: () =>
    set((state) => ({
      ...state,
      checkModalValue: defaultValue,
    })),
}));

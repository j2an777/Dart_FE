import { Alert } from '@/components';
import { GalleryInfo } from '@/pages/main/components';
import { CheckModal } from '@/pages/signup/components';
import { GalleryImages } from '@/types/gallery';
import { ComponentProps } from 'react';
import { create } from 'zustand';

interface AlertModalState {
  alertValue: AlertModalProps;
  open: (form: Omit<AlertModalProps, 'open'>) => void;
  close: () => void;
}
type AlertModalProps = Omit<ComponentProps<typeof Alert>, 'close'>;

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
        onClickCancelButton: form.onClickCancelButton ? () => {
          form.onClickCancelButton?.();
          get().close();
        } : undefined,
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
  open: (galleryId: number, hasEnded: boolean) => void;
  close: () => void;
}

const galleryInfoDefaultValue: GalleryInfoProps = {
  galleryId: null,
  open: false,
  hasEnded: false,
};

export const galleryInfoStore = create<GalleryInfoState>((set) => ({
  galleryInfoValue: galleryInfoDefaultValue,
  open: (galleryId: number, hasEnded: boolean) =>
    set((state) => ({ ...state, galleryInfoValue: { open: true, galleryId, hasEnded } })),
  close: () => {
    set((state) => ({ ...state, galleryInfoValue: galleryInfoDefaultValue }));
  },
}));

// 채팅 모달
interface ChatState {
  chatValue: { open: boolean; chatRoomId: number; galleryNick: string };
  open: (chatRoomId: number, galleryNick: string) => void;
  close: () => void;
}

export const chatStore = create<ChatState>((set) => ({
  chatValue: { open: false, chatRoomId: 0, galleryNick: '' },
  open: (chatRoomId: number, galleryNick: string) =>
    set({ chatValue: { open: true, chatRoomId, galleryNick } }),
  close: () => set({ chatValue: { open: false, chatRoomId: 0, galleryNick: '' } }),
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

// 쿠폰 모달
interface BaseState {
  value: { open: boolean };
  open: () => void;
  close: () => void;
}

export const couponStore = create<BaseState>((set) => ({
  value: { open: false },
  open: () => set({ value: { open: true } }),
  close: () => set({ value: { open: false } }),
}));

interface GalleryDetailState {
  galleryDetailValue: {
    open: boolean;
    gallery: GalleryImages | null;
  };
  open: (gallery: GalleryImages) => void;
  close: () => void;
}

const defaultGalleryDetailValue = {
  open: false,
  gallery: null,
};

// 작품설명 모달
export const galleryDetailStore = create<GalleryDetailState>((set) => ({
  galleryDetailValue: defaultGalleryDetailValue,
  open: (gallery: GalleryImages) =>
    set(() => ({
      galleryDetailValue: { open: true, gallery },
    })),
  close: () =>
    set(() => ({
      galleryDetailValue: defaultGalleryDetailValue,
    })),
}));

interface ProgressState {
  progressValue: {
    open: boolean;
    progress: number;
  };
  open: (progress: number) => void;
  close: () => void;
}

const defaultProgressValue = {
  open: false,
  progress: 0,
};

export const progressStore = create<ProgressState>((set) => ({
  progressValue: defaultProgressValue,
  open: (progress: number) =>
    set(() => ({
      progressValue: { open: true, progress },
    })),
  close: () =>
    set(() => ({
      progressValue: defaultProgressValue,
    })),
}));

const loginModalDefalutValue = {
  open: false,
};

export const LoginModalStore = create<BaseState>((set) => ({
  value: loginModalDefalutValue,
  open: () => set({ value: { open: true } }),
  close: () => set({ value: { open: false } }),
}));

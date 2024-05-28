import { Alert } from '@/components';
import { ComponentProps } from 'react';
import { create } from 'zustand';

interface AlertState {
  alertValue: ModalProps;
  openAlert: () => void;
}
type ModalProps = ComponentProps<typeof Alert>;

const defaultValue: ModalProps = {
  open: false,
  title: null,
  description: null,
};

export const alertStore = create<AlertState>((set) => ({
  alertValue: defaultValue,
  openAlert: () => set((value) => ({ ...value, open: !value.alertValue.open })),
}));

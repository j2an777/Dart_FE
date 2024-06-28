import { create } from 'zustand';

interface Agreement {
  [key: string]: boolean;
  use: boolean;
  personal: boolean;
  copyright: boolean;
}

const defaultValue: Agreement = {
  use: false,
  personal: false,
  copyright: false,
};

interface State {
  agreements: Agreement;
  allChecked: boolean;
  setAgreements: (value: string) => void;
  toggleAll: () => void;
  resetAgreements: () => void;
}

export const agreeStore = create<State>((set, get) => ({
  agreements: defaultValue,
  allChecked: false,
  setAgreements: (value: string) => {
    const newAgreements = {
      ...get().agreements,
      [value]: !get().agreements[value],
    };
    set({
      agreements: newAgreements,
      allChecked: Object.values(newAgreements).every(Boolean),
    });
  },
  resetAgreements: () =>
    set((prev) => ({
      ...prev,
      allChecked: false,
      agreements: defaultValue,
    })),
  toggleAll: () => {
    const currentState = get();
    const newAllChecked = !currentState.allChecked;
    const prevAgreements = currentState.agreements;
    const newAgreements = Object.keys(currentState.agreements).reduce(
      (acc, key) => ({
        ...acc,
        [key]: newAllChecked,
      }),
      prevAgreements,
    );
    set({
      agreements: newAgreements,
      allChecked: newAllChecked,
    });
  },
}));

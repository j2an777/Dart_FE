import { create } from 'zustand';

interface DateNFeeState {
  activeBtn: 'free' | 'pay' | null;
  dateRange: {
    startDate: Date;
    endDate: Date | null;
  };
  feeDetails: {
    fee: number;
    totalPay: number;
    period: string | null;
  };
  setActiveBtn: (btn: 'free' | 'pay' | null) => void;
  setDateRange: (range: { startDate: Date; endDate: Date | null }) => void;
  setFeeDetails: (details: {
    fee: number;
    totalPay: number;
    period: string | null;
  }) => void;
}

export const dateNfeeStore = create<DateNFeeState>()((set) => ({
  activeBtn: null,
  dateRange: {
    startDate: new Date(),
    endDate: null,
  },
  feeDetails: {
    fee: 0,
    totalPay: 0,
    period: null,
  },
  setActiveBtn: (btn) => set({ activeBtn: btn }),
  setDateRange: (range) => set({ dateRange: range }),
  setFeeDetails: (details) => set({ feeDetails: details }),
}));

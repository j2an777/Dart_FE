import { CostValues, FilterType } from '@/types/gallery';
import { create } from 'zustand';

interface FilterState {
  filterValue: FilterType;
  costArray: string[];
  onChange: (newValue: Partial<FilterType>) => void;
  onNestingChange: (newValue: Partial<FilterType>) => void;
}

const defaultVale: FilterType = {
  category: 'title',
  cost: 'all',
  display: 'all',
  keyword: '',
  sort: 'latest',
};

export const filterStore = create<FilterState>((set) => ({
  filterValue: defaultVale,
  costArray: ['free', 'pay'],
  onChange: (newValue) =>
    set((prev) => ({
      ...prev,
      filterValue: { ...prev.filterValue, ...newValue },
    })),
  onNestingChange: (newValue) =>
    set((prev) => {
      const value = Object.values(newValue);
      if (JSON.stringify(value) === JSON.stringify(prev.costArray)) {
        return {
          ...prev,
          costArray: ['free', 'pay'],
          filterValue: {
            ...prev.filterValue,
            cost: 'all',
          },
        };
      } else {
        return {
          ...prev,
          costArray: value,
          filterValue: {
            ...prev.filterValue,
            cost: value[0] as CostValues,
          },
        };
      }
    }),
}));

import { Member } from '@/types/member';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface memberState extends Member {
  setMember: (data: Member) => void;
  logout: () => void;
}

const initalState: Member = {
  nickname: '',
  email: '',
};

export const memberStore = create<memberState>()(
  persist(
    (set) => ({
      ...initalState,
      setMember: (data) => set(() => ({ nickname: data.nickname, email: data.email })),
      logout: () => set(() => initalState),
    }),
    {
      name: 'memberInfo',
    },
  ),
);

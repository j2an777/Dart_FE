import { Member } from '@/types/member';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthData = Pick<Member, 'nickname' | 'email' | 'profileImage'>;
interface memberState {
  auth: AuthData;
  accessToken?: string | null;
  setMember: (data: AuthData) => void;
  setToken: (accessToken: string) => void;
  deleteMember: () => void;
}

const initalState: AuthData = {
  nickname: '',
  email: '',
  profileImage: '',
};

export const memberStore = create<memberState>()(
  persist(
    (set) => ({
      auth: initalState,
      accessToken: null,
      setToken: (accessToken: string) => {
        set((prev) => ({
          ...prev,
          accessToken,
        }));
      },

      setMember: (auth) => {
        set((prev) => ({
          ...prev,
          auth,
        }));
      },
      deleteMember: () =>
        set((prev) => ({
          ...prev,
          auth: initalState,
          accessToken: null,
        })),
    }),
    {
      name: 'memberInfo',
    },
  ),
);

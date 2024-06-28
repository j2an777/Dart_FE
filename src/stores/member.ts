import { LoginResponse, Member } from '@/types/member';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthData = Pick<Member, 'nickname' | 'email' | 'profileImage'>;
interface memberState {
  auth: AuthData;
  accessToken?: string | null;
  setMember: (data: LoginResponse) => void;
  logout: () => void;
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
      setMember: (data) => {
        const { accessToken, ...authData } = data;
        set((prev) => ({
          ...prev,
          auth: authData,
          accessToken: accessToken,
        }));
      },
      logout: () =>
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

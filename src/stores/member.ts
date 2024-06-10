import { Member } from '@/types/member';
import decodedToekn from '@/utils/decodedToekn';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthData = Pick<Member, 'nickname' | 'email' | 'profileImage'>;
interface memberState {
  auth: AuthData;
  accessToken?: string | null;
  setMember: (accessToken: string) => void;
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
      setMember: (accessToken) => {
        const data = decodedToekn(accessToken);
        set((prev) => ({
          ...prev,
          auth: data,
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

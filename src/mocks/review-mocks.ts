
export type ReviewType = {
    comment: string;
    date: string;
    id: string;
    rating: number;
    user: ReviewUserType;
  };

export type ReviewUserType = {
    avatarUrl: string;
    id: string;
    isPro: boolean;
    name: string;
  }

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const reviews : ReviewType[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Mon Oct 30 2023 10:30:21 GMT+0800 (Taipei Standard Time)',
    id: self.crypto.randomUUID(),
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: self.crypto.randomUUID(),
      isPro: false,
      name: 'Oliver.conner',
    }
  },
  {
    comment: 'great place',
    date: 'Mon Oct 30 2023 10:30:21 GMT+0800 (Taipei Standard Time)',
    id: self.crypto.randomUUID(),
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: self.crypto.randomUUID(),
      isPro: false,
      name: 'Sebastian',
    }
  },
  {
    comment: 'Horrible place',
    date: 'Mon Oct 30 2023 10:30:21 GMT+0800 (Taipei Standard Time)',
    id: self.crypto.randomUUID(),
    rating: 2,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: self.crypto.randomUUID(),
      isPro: false,
      name: 'Bob the Builder',
    }
  },
  {
    comment: 'Not impressed',
    date: 'Mon Oct 30 2023 10:30:21 GMT+0800 (Taipei Standard Time)',
    id: self.crypto.randomUUID(),
    rating: 3,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: self.crypto.randomUUID(),
      isPro: true,
      name: 'Pretentious Sam',
    }
  },
];


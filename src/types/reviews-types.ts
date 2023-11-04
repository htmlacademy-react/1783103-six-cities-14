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
  };

export type NewsType = {
  title: string;
  body: string;
  id: number;
};

export type Props = {
  news: NewsType;
  index: number;
  onClick: any;
};

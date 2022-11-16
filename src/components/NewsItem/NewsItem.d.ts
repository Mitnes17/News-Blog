export type NewsType = {
  title: string;
  content: string;
  id: number;
};

export type Props = {
  news: NewsType;
  index: number;
  onClick: any;
};

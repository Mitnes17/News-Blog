export type NewsType = {
  title: string;
  body: string;
  id: string;
};

export type Props = {
  news: NewsType;
  index: number;
  onClick: (e: NewsType) => void;
};

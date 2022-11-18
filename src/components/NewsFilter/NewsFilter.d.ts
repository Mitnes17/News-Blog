export interface FilterType {
  search: string;
  select: string;
}

export type Props = {
  filter: FilterType;
  setFilter: any;
};

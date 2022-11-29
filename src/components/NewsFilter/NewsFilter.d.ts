import { SELECT } from '../../hooks/usePosts';

export interface FilterType {
  search: string;
  select: SELECT;
}

export type Props = {
  filter: FilterType;
  setFilter: (e: { search: string; select: SELECT }) => void;
  setLimit: (e: number) => void;
};

import { ChangeEvent, FC } from 'react';

import { Select } from '../UI/Select';
import { Input } from '../UI/Input';
import { Props } from './NewsFilter.d';
import { SELECT } from '../../hooks/usePosts';

import * as S from './styled';

export const NewsFilter: FC<Props> = ({ filter, setFilter }) => {
  return (
    <S.NewsFilter>
      <Select
        onChange={(select: string) =>
          setFilter({ ...filter, select: SELECT[select as keyof typeof SELECT] })
        }
        defaultValue='Sort By'
        options={[
          { value: 'id', name: 'ID' },
          { value: 'title', name: 'Title' },
          { value: 'body', name: 'Content' },
        ]}
      />
      <Input
        type='text'
        placeholder='Search...'
        onChange={(e: ChangeEvent) =>
          setFilter({ ...filter, search: (e.target as HTMLInputElement).value })
        }
        value={filter.search}
      />
    </S.NewsFilter>
  );
};

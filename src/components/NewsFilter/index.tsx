import { ChangeEvent, FC } from 'react';

import { Select } from '../UI/Select';
import { Input } from '../UI/Input';
import { Props } from './NewsFilter.d';
import { SELECT } from '../../hooks/usePosts';

import * as S from './styled';

export const NewsFilter: FC<Props> = ({ filter, setFilter, setLimit }) => {
  return (
    <S.NewsFilter>
      <S.SelectWrap>
        <Select
          onChange={(select) =>
            setFilter({ ...filter, select: SELECT[select as keyof typeof SELECT] })
          }
          defaultValue='Sort By'
          options={[
            { value: 'id', name: 'ID' },
            { value: 'title', name: 'Title' },
            { value: 'body', name: 'Content' },
          ]}
        />
        <Select
          onChange={(e) => setLimit(+e)}
          defaultValue='News per page'
          options={[
            { value: 10, name: '10' },
            { value: 25, name: '25' },
            { value: -1, name: 'All' },
          ]}
        />
      </S.SelectWrap>
      <div></div>
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

import { FC } from 'react';
import { Select } from '../UI/Select';
import { Input } from '../UI/Input';
import { Props } from './NewsFilter.d';
import * as S from './styled';

export const NewsFilter: FC<Props> = ({ filter, setFilter }) => {
  return (
    <S.NewsFilter>
      <Select
        onChange={(select: string) => setFilter({ ...filter, select: select })}
        defaultValue='Sort By'
        options={[
          { value: 'title', name: 'Title' },
          { value: 'body', name: 'Content' },
        ]}
      />
      <Input
        type='text'
        placeholder='Search...'
        onChange={(e: any) => setFilter({ ...filter, search: e.target.value })}
        value={filter.search}
      />
    </S.NewsFilter>
  );
};

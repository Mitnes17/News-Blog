import { FC } from 'react';
import { Props } from './Input.d';
import * as S from './styled';

export const Input: FC<Props> = ({ placeholder, onChange, type, value }) => {
  return (
    <S.Input
      {...{ value }}
      {...{ placeholder }}
      {...{ onChange }}
      {...{ type }}
    />
  );
};

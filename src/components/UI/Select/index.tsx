import { FC } from 'react';

import { Props, OptionType } from './Select.d';

import * as S from './styled';

export const Select: FC<Props> = ({ defaultValue, options, onChange }) => {
  return (
    <S.Select onChange={(event) => onChange(event.target.value)}>
      <option
        disabled
        value=''
      >
        {defaultValue}
      </option>
      {options.map((option: OptionType, index: number) => (
        <option
          value={option.value}
          key={index}
        >
          {option.name}
        </option>
      ))}
    </S.Select>
  );
};

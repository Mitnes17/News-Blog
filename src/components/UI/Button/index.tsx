import { FC } from 'react';
import { Props } from './Button.d';
import * as S from './styled';

export const Button: FC<Props> = ({ color, children, ...props }) => {
  return (
    <S.Button
      {...{ color }}
      {...props}
    >
      {children}
    </S.Button>
  );
};

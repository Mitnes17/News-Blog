import { FC } from 'react';
import { Props } from './Button.d';
import * as S from './styled';

export const Button: FC<Props> = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>;
};

import { FC } from 'react';
import { Props } from './ModalCreate.d';
import * as S from './styled';

export const ModalCreate: FC<Props> = ({ children, isActive, setIsActive }) => {
  return (
    <S.ModalCreate
      {...{ isActive }}
      onClick={() => setIsActive(false)}
    >
      <S.CreateForm onClick={(e) => e.stopPropagation()}>{children}</S.CreateForm>
    </S.ModalCreate>
  );
};

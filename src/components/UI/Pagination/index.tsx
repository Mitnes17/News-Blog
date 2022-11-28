import { FC } from 'react';
import * as S from './styled';

type Props = {
  list: Array<number>;
  current: number;
  onClick: (page: number) => void;
};

export const Pagination: FC<Props> = ({ list, current, onClick }) => {
  return (
    <S.Pagination>
      {list.map(
        (
          item //styled for li
        ) => (
          <li
            onClick={() => onClick(item)}
            key={item}
            className={item === current ? 'isActive' : ''}
          >
            {item}
          </li>
        )
      )}
    </S.Pagination>
  );
};

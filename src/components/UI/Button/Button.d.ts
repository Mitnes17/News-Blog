import { SyntheticEvent } from 'react';

export type StyleProps = {
  color?: string;
};
export type Props = StyleProps & {
  children: string;
  onClick?: (e: SyntheticEvent) => void;
};

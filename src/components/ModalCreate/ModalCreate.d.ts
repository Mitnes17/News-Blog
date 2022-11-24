export type StyleProps = {
  isActive: boolean;
};

export type Props = StyleProps & {
  children: React.ReactNode;
  setIsActive: (e: boolean) => void;
};

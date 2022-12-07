import { RootType } from './../store/reducers/index';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector;

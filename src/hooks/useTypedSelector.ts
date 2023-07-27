import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store';

// This hook is used to get the state of the store
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
// This is equivalent to:
// const useTypedSelector = useSelector as TypedUseSelectorHook<RootState>;
// or
// const useTypedSelector = useSelector<RootState>((state) => state);

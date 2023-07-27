import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';

// This hook is used to bind all action creators to the dispatch function
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
  // This is equivalent to:
  // {
  //   searchRepositories: dispatch(searchRepositories),
  //   ...
  // }
}
import { ActionType } from '../action-types'

interface SearchRepositoriesRequestAction {
  type: ActionType.SEARCH_REPOSITORIES_REQUEST;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action = SearchRepositoriesRequestAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction

import { ActionType } from '../action-types';

interface IncreaseAction {
  type: ActionType.INCREASE;
  payload: number;
}

interface DecreaseAction {
  type: ActionType.DECREASE;
  payload: number;
}

interface ResetAction {
  type: ActionType.RESET;
}

export type Action = IncreaseAction | DecreaseAction | ResetAction;

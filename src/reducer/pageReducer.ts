/* eslint-disable default-param-last */
import { HIDE_DIALOG, HIDE_ERROR, SHOW_DIALOG, SHOW_ERROR } from '../constants';
import initialState from './initialState';

export default function pageReducer(state = initialState?.page, action) {
  switch (action.type) {
    case HIDE_DIALOG:
      return { ...state, isDialogActive: false };
    case SHOW_DIALOG:
      return { ...state, isDialogActive: true };
    case SHOW_ERROR:
      return { ...state, isError: true };
    case HIDE_ERROR:
      return { ...state, isError: false };
    default:
      return state;
  }
}

import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from '../constants';
import initialState from './initialState';

export default function pageReducer(state = initialState?.page, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return { ...state, notification: action?.notification };
    case HIDE_NOTIFICATION:
      return { ...state, notification: action?.notification };
    default:
      return state;
  }
}

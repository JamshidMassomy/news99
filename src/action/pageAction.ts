import {
  HIDE_DIALOG,
  HIDE_ERROR,
  SHOW_DIALOG,
  SHOW_ERROR,
  SHOW_NOTIFICATION,
} from '../constants';

export const showDialog = () => (dispatch) => {
  dispatch({ type: SHOW_DIALOG, isDialogActive: true });
};

// export default function setEvent(payload: any) {
//   return { type: ADD_EVENT, payload };
// }
export const showError = () => (dispatch) => {
  dispatch({ type: SHOW_ERROR, isError: true });
};

export const showNotification = () => (dispatch) => {
  dispatch({ type: SHOW_NOTIFICATION, message: dispatch });
};

export const hideDialog = () => (dispatch) => {
  dispatch({ type: HIDE_DIALOG, isDialogActive: false });
};

export const hideError = () => (dispatch) => {
  dispatch({ type: HIDE_ERROR, isError: false });
};

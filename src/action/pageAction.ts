import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from '../constants';

export const showNotification = (payload) => (dispatch) => {
  const notification = { message: payload, isActive: true };
  dispatch({ type: SHOW_NOTIFICATION, notification });
};

export const hideNotification = () => (dispatch) => {
  const notification = { isActive: false };
  dispatch({ type: HIDE_NOTIFICATION, notification });
};

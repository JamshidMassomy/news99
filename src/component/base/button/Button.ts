enum ButtonType {
  BTN_PRIMARY = 'primary',
  BTN_SECONDARY = 'secondary',
  BTN_INLINE_PRIMARY = 'inlinePrimary',
  BTN_DISABLED_PRIMARY = 'disabledPrimary',
  BTN_ERROR_WHITE = 'errorWhite',
  BTN_GRAY = 'gray',
  BTN_WARNNING = 'warn',
  GREEN = 'green',
  BTN_NEXT = 'next_btn',
  BTN_BACK = 'btn_back',
  BTN_SEARCH = 'btn_search',
}
export interface IButton {
  text: string;
  type?: ButtonType;
  onClick?: () => void;
  children?: any;
  disabled?: boolean;
}

export { ButtonType };

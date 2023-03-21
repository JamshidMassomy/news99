enum ButtonType {
  BTN_PRIMARY = 'primary',
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

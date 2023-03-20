// react
import React from 'react';

// componet & styles
import { ButtonType, IButton } from './Button';
import './style.scss';

const Button: React.FC<any> = (props: IButton) => {
  const { text, type, onClick, children, disabled } = props;

  const handleButtonType = () => {
    switch (type) {
      case ButtonType.BTN_PRIMARY:
        return ` bg-indigo-500 text-white rounded-md m-2 hover:bg-indigo-600`;
      case ButtonType.GREEN:
        return `w-full py-4 bg-green-600 rounded-lg text-green-100`;
      case ButtonType.BTN_NEXT:
        return `px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`;
      case ButtonType.BTN_BACK:
        return `px-3 py-2 ml-0 text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`;
      case ButtonType.BTN_SEARCH:
        return `text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
      default:
        return 'primary default';
    }
  };

  return (
    <button
      onClick={onClick}
      type='submit'
      className={handleButtonType()}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;

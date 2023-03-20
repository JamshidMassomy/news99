// react
import React, { useEffect, useState } from 'react';

// components
import { FaExclamation } from 'react-icons/fa';
import Icon from '../icon/Icon';
import { Notification, NotificationType } from './Toast';
import classNames from 'classnames';

// styles
import './ToastStyle.scss';

export default function ToastMessage(props: Notification) {
  const { message, type, isActive } = props;

  const [visible, setVisible] = useState(isActive);

  useEffect(() => {
    setVisible(isActive);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [isActive]);

  const handleIcon = () => {
    switch (type) {
      case NotificationType.SUCCESS:
        return <Icon icon='success-info' />;
      case NotificationType.ERROR:
        return <FaExclamation color='red' />;
      default:
        return <Icon icon='toast-info' />;
    }
  };

  return (
    <div
      className={classNames(
        'toast max-w-xs bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700',
        visible ? 'active' : ''
      )}
    >
      <div className='flex p-4'>
        <div className='flex-shrink-0'>{handleIcon()}</div>
        <div className='ml-3'>
          <p className='text-sm text-gray-700 dark:text-gray-400'>{message}</p>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// icons
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';

// styles
import './styles.scss';

export interface IMenue {
  id?: number;
  name?: string;
  path: string;
}

export default function Navbar() {
  const { logout } = useAuth();

  const menus: IMenue[] = [
    {
      id: 1,
      name: 'Profile',
      path: 'profile',
    },
    {
      id: 2,
      name: 'News',
      path: 'news',
    },
  ];

  const renderMenu = () => {
    return menus.map((item) => {
      return (
        <a
          key={item.id}
          href={item.path}
          className='text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4'
        >
          {item.name}
        </a>
      );
    });
  };

  const handleLogOut = () => {
    logout();
  };

  return (
    <>
      <div className='news-nav bg-gray-100 font-sans w-full m-0'>
        <div className='bg-white shadow'>
          <div className='container mx-auto px-4'>
            <div className='flex items-center justify-between py-4'>
              <div className='hidden sm:flex sm:items-center'>
                {renderMenu()}
              </div>

              <div className='hidden sm:flex sm:items-center'>
                <div className='user-control'>
                  <Link to='/login' onClick={handleLogOut}>
                    <div className='flex flex-row justify-center items-center'>
                      <span>Logout</span>
                      <FaSignOutAlt />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className='block sm:hidden bg-white border-t-2 py-2'>
              <div className='flex flex-col'>{renderMenu()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

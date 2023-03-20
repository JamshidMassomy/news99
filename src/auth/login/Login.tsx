/* eslint-disable jsx-a11y/label-has-associated-control */

// react
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonType } from '../../component/base/button/Button';
import Button from '../../component/base/button/Buttons';

// components
import Icon from '../../component/base/icon/Icon';
import { Input } from '../../component/base/input/Input';

// auth
import { ILogin } from '../AuthProvider';
import { useAuth } from '../useAuth';

// styles
import './login.scss';

export default function Login() {
  const { login } = useAuth();
  const isError = useSelector((state: any) => state?.page?.isError);

  const [email, setEmail] = useState('');
  const [apiToken, setApiToken] = useState('');

  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleApiTokenChange = (event) => {
    setApiToken(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData: ILogin = { username: email, apiKey: apiToken };
    login?.(loginData);
  };

  // validation, prommpt, route
  // TO DO fixe semi colon
  // SAVE token in local storage

  return (
    <div className='antialiased bg-gradient-to-br'>
      <div className='container px-6 mx-auto'>
        <div className='flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center'>
          <div className='md:w-full lg:w-9/12 mx-auto md:mx-0 login-form'>
            <div className='bg-white p-10 flex flex-col w-full shadow-xl rounded-xl'>
              <h2 className='text-2xl font-bold text-gray-800 text-left mb-5'>
                Sigin
              </h2>
              <form action='' className='w-full' onSubmit={handleSubmit}>
                <div id='input' className='flex flex-col w-full my-5'>
                  <Input
                    type='text'
                    label='Email'
                    defaultValue={email}
                    placeholder='Please insert your Username/Email'
                    onChange={handleEmailChange}
                  />
                </div>
                <div id='input' className='flex flex-col w-full my-5'>
                  <Input
                    type='password'
                    label='API Key'
                    defaultValue={apiToken}
                    placeholder='Please insert your API key'
                    onChange={handleApiTokenChange}
                  />
                </div>
                <div id='button' className='flex flex-col w-full my-5'>
                  <Button type={ButtonType.GREEN}>
                    <div className='flex flex-row items-center justify-center'>
                      <div className='mr-2'>
                        <Icon icon='login-icon' />
                      </div>
                      <div className='font-bold'>Sigin</div>
                    </div>
                  </Button>
                </div>
              </form>
              <hr className='mb-6 border-t' />
              <div className='text-center'>
                <a
                  className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
                  href='https://newsapi.org/docs/get-started'
                >
                  Dont have an Api key? Get one!
                </a>
              </div>
              {isError && <p>Incorrect Apikey or Username</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

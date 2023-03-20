import React from 'react';
import { Input } from '../../component/base/input/Input';
import ava from '../../../public/ava.png';
import back from '../../../public/back.png';
import { useLocalStorage } from '../../auth/useLocalStorage';

export default function Profile() {
  const apiKey = useLocalStorage('apikey', null);
  return (
    <div className='flex flex-col items-center h-[100vh]'>
      <div className='relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none'>
        <div className='relative flex h-32 w-full justify-center rounded-xl bg-cover'>
          <img
            alt='background'
            src={back}
            className='absolute flex h-32 w-full justify-center rounded-xl bg-cover'
          />
          <div className='absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700'>
            <img className='h-full w-full rounded-full' src={ava} alt='' />
          </div>
        </div>
        <div className='mt-16 flex flex-col items-center'>
          <Input
            type='text'
            label='username'
            defaultValue={'email@gmai.com'}
          ></Input>
          <Input type='text' label='apikey' defaultValue={apiKey}></Input>
        </div>
      </div>
    </div>
  );
}

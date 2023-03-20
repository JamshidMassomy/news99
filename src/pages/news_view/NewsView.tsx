import React from 'react';
import Icon from '../../component/base/icon/Icon';
import { INewsArticle } from '../../types';

export default function NewsView(props: INewsArticle) {
  const { urlToImage, content, publishedAt, title, description } = props;
  return (
    <div>
      {urlToImage && (
        <img
          src={urlToImage}
          alt='People'
          className='w-full object-cover h-32 sm:h-48 md:h-64'
        />
      ) ? (
        <img
          src={urlToImage}
          alt='People'
          className='w-full object-cover h-32 sm:h-48 md:h-64'
        />
      ) : null}

      <div className='p-4 md:p-6'>
        <p className='text-blue-500 font-semibold text-xs mb-1 leading-none'>
          {title}
        </p>
        <p className='font-semibold mb-2 text-xl leading-tight sm:leading-normal'>
          {description || ''}
        </p>
        <p className='text-gray-700 text-base'>{content}</p>

        <div className='text-sm flex items-center'>
          <Icon icon='mini-clock' />
          <p className='leading-none'>{publishedAt}</p>
        </div>
      </div>
    </div>
  );
}

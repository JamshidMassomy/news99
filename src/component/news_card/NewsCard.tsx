import { INewsArticle } from '../../types';
import './NewsCard.scss';

export default function NewsCard(props: INewsArticle) {
  const { urlToImage, source, onclick, title } = props;

  return (
    <>
      <div className='news-card lg:flex group sm:flex '>
        {urlToImage && (
          <div
            className='news-img-wrapper h-48 lg:h-auto lg:w-48  bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
            title='Woman holding a mug'
          >
            <img className='img' src={urlToImage} alt='img' />
          </div>
        ) ? (
          <div
            className='news-img-wrapper h-48 lg:h-auto lg:w-48  bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
            title='Woman holding a mug'
          >
            <img className='img' src={urlToImage} alt='img' />
          </div>
        ) : null}
        <div className='p-4 flex flex-col justify-between'>
          <div>
            <p className='text-sm text-gray-600'>{source?.name || ''}</p>
            <div className='text-gray-900 font-bold text-xl mb-2'>{title}</div>
          </div>
          <div className='flex items-center'>
            <a
              href='#1'
              className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              onClick={() => {
                onclick(props);
              }}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

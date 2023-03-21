// react
import { useEffect, useState } from 'react';

// api
import { fetchApi } from '../../api/api.config';

// components
import NewsCard from '../../component/news_card/NewsCard';
import Pagination from '../../component/pagination/Pagination';
import { INews, INewsArticle } from '../../types';
import NewsView from '../news_view/NewsView';
import { NotificationType } from '../../component/base/toast/Toast';
import ToastMessage from '../../component/base/toast/ToastMessage';

// styles
import './News.scss';
import SearchInput from './search_input/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from '../../action/pageAction';

export default function News() {
  const toastDispatcher: any = useDispatch();
  const toast = useSelector((state: any) => state?.page.notification);
  const [news, setNews] = useState<INews>();
  const [searchInput, setSearchInput] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<INewsArticle>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(4);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    fetchNews();
  }, [itemsPerPage, currentPage]);

  const isTokeValid = () => {
    return typeof localStorage.getItem('apiKey') !== 'undefined';
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const fetchNews = () => {
    if (isTokeValid()) {
      fetchApi(`everything&pageSize=${itemsPerPage}&page=${currentPage}`)
        .then((data: INews) => {
          setNews(data);
          setTotalPages(Math.ceil(data.totalResults / itemsPerPage));
          setSelectedArticle(data?.articles?.[0]);
        })
        .catch(() => {
          toastDispatcher('Failed to fetch API! Something went wrong');
        });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    return searchNews();
  };

  const searchNews = async () => {
    const search = searchInput.toLowerCase().trim();

    if (isTokeValid()) {
      await fetchApi(`${search}&pageSize=${itemsPerPage}&page=${currentPage}`)
        .then((data: INews) => {
          if (data.articles.length === 0) {
            toastDispatcher(showNotification('No record found'));
          } else {
            setNews(data);
            setTotalPages(Math.ceil(data.totalResults / itemsPerPage));
            setSelectedArticle(data?.articles?.[0]);
          }
        })
        .catch(() => {
          toastDispatcher(showNotification('An error ocurred!'));
        });
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleArticlClick = (news: INewsArticle) => {
    setSelectedArticle(news);
  };

  const handleNewsRender = () => {
    return news?.articles?.map((data: INewsArticle, key: number) => {
      return (
        <li key={key}>
          <NewsCard
            onclick={handleArticlClick}
            title={data.title}
            description={data.description}
            urlToImage={data.urlToImage}
            url={data.url}
            publishedAt={data.publishedAt}
            source={data.source}
            author={data.author}
            content={data.content}
          />
        </li>
      );
    });
  };

  return (
    <>
      <ToastMessage
        isActive={toast.isActive}
        type={NotificationType.ERROR}
        message={toast.message}
      ></ToastMessage>
      <div className='search-news'>
        <SearchInput
          required
          defaultValue={searchInput}
          handleSearch={handleSearch}
          handleInputChange={handleInputChange}
        />
      </div>

      <div className='news-main'>
        <div className='news-main-content'>
          <ul>
            <div className='news-card-ul'>{handleNewsRender()}</div>
          </ul>
          <div className='news-main-view'>
            <NewsView
              author={selectedArticle?.author || ''}
              description={selectedArticle?.description || ''}
              content={selectedArticle?.content || ''}
              publishedAt={selectedArticle?.publishedAt || ''}
              source={selectedArticle?.source.name || ''}
              title={selectedArticle?.title || ''}
              url={selectedArticle?.url || ''}
              urlToImage={selectedArticle?.urlToImage || ''}
            />
          </div>
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={paginate}
        />
      </div>
    </>
  );
}

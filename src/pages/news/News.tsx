// react

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showError } from '../../action/pageAction';
import { fetchApi } from '../../api/api.config';
// import { useDispatch } from 'react-redux';
import { NotificationType } from '../../component/base/toast/Toast';
import ToastMessage from '../../component/base/toast/ToastMessage';

// components
import NewsCard from '../../component/news_card/NewsCard';
import Pagination from '../../component/pagination/Pagination';
import { INews, INewsArticle } from '../../types';
import NewsView from '../news_view/NewsView';

// styles
import './News.scss';
import SearchInput from './search_input/SearchInput';

// to do use global error message in redux is error
export default function News() {
  const [news, setNews] = useState<INews>();

  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<INewsArticle>();

  const [errorMessage, setErrorMessage] = useState('');
  const [isToastActive, setToastActive] = useState<boolean>(false);

  const dispatch = useDispatch();
  // paginiation

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState<number>(1);

  const isTokeValid = () => {
    return typeof localStorage.getItem('apiKey') !== 'undefined';
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const fetchNews = () => {
    setIsLoading(true);
    if (isTokeValid()) {
      fetchApi(`everything&pageSize=${itemsPerPage}&page=${currentPage}`)
        .then((data: INews) => {
          setNews(data);
          setTotalPages(Math.ceil(data.totalResults / itemsPerPage));
          setSelectedArticle(data?.articles?.[0]);
        })
        .catch((error) => {
          dispatch(showError());
          setErrorMessage('An error occured' + error);
        });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, [itemsPerPage, currentPage]);

  const handleSearch = (event) => {
    event.preventDefault();
    setIsLoading(true);
    return searchNews();
  };

  const searchNews = async () => {
    const search = searchInput.toLowerCase().trim();

    if (isTokeValid()) {
      await fetchApi(`${search}&pageSize=${itemsPerPage}&page=${currentPage}`)
        .then((data: INews) => {
          if (data.articles.length === 0) {
            setToastActive(true);
          } else {
            setNews(data);
            setTotalPages(Math.ceil(data.totalResults / itemsPerPage));
            setSelectedArticle(data?.articles?.[0]);
          }
        })
        .catch((error) => {
          dispatch(showError());
          setIsLoading(false);
          setErrorMessage('An error occured' + error);
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
        isActive={isToastActive}
        type={NotificationType.SUCCESS}
        message='No record found'
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

// export default Pagination;

// const mapStateToProps = (state) => {
//   return {
//     isOverlayActive: state?.page?.isOverlayActive,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   hidOverlay: bindActionCreators(hideOverlay, dispatch),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Overlay);

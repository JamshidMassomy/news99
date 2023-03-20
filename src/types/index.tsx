export interface INewsSource {
  id?: number;
  name?: string;
}

export interface INewsArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: INewsSource | any;
  title: string;
  url: string;
  urlToImage: string;
  onclick?: (article: INewsArticle) => void;
}

export interface INews {
  articles?: INewsArticle[];
  status: string;
  totalResults?: number;
}

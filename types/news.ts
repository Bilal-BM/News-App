// types.ts

export interface NewsResponse {
    title: string;
    description: string;
    url: string;
    image: string;
  }
  
  export interface ArticleProps {
    article: NewsResponse;
  }
  
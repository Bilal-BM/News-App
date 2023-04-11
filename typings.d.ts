
type Article = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    languagae:  string;
    publihed_at: string;
    sources: string;
    title: string;
    url: string;

};
 


type paginatnion={
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;

}

type NewsResponse = {
  url: Key | null | undefined;
  description: string;
  title: string;
  image: any;
  filter(arg0: (item: any) => boolean): unknown;

  pagination: pagination;
  data: DataEntry[];

}



type Category = 
| "buisiness"
| "world"
|   "sport"
|   "videos"
|"article"

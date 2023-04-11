export default function sortNewsByImage(newsData: NewsResponse[]): NewsResponse[] {
    const newsWithImage: NewsResponse[] = [];
    const newsWithoutImage: NewsResponse[] = [];
    const uniqueNews = new Set<string>();


  
    
    for (let i = 0; i < newsData.length; i++) {
      const newsItem = newsData[i];
  
      // Skip news articles that have already been added to the list
    if (uniqueNews.has(newsItem.title)) {
        continue;
      }
  
      uniqueNews.add(newsItem.title);
  
      if (newsItem.image) {
        newsWithImage.push(newsItem);
      } else {
        newsWithoutImage.push(newsItem);
      }
    }
  
    const sortedNews = [...newsWithImage, ...newsWithoutImage];
  
    return sortedNews;
  }

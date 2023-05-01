import sortNewsByImage from "./sortNewsByImage";




const fetchNews = async () => {
  const QUERY = `
    query MyQuery {
      myQuery(access_key: "74d054d886d65e3376d47fec14b1aa7a") {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          offset
          limit
          total
        }
      }
    }
  `;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'apikey kourimat::stepzen.io+1000::2ab9fc57e9d1894865d020bbddcd74c2f20c5dd7f6184b49ce954a803dcb50ba',
    },
    body: JSON.stringify({ query: QUERY, variables: {} }),
  };

  const res = await fetch('https://kourimat.stepzen.net/api/quoting-scorpion/__graphql', requestOptions);
  const newsResponse = await res.json();

  const news = sortNewsByImage(newsResponse.data.myQuery.data);

  return news;
}
export default fetchNews;


// "https://apiv2.allsportsapi.com/basketball/?met=Countries&APIkey=28eb21c1aa418ecaf8c30e09ef44da1f779794b559eb83749c828abd15900aca"
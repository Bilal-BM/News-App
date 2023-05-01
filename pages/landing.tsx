import Head from 'next/head'
import withAuth from '../utils/withAuth';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from '../styles/Home.module.css'
import Navbar from '@/components/navbar'
import Caarousel from '@/components/Carousel'

const  Home =() => {
 

  return (
    <div className={styles.container}>
      <Head>
        <title>BM News - Breaking News and Latest Updates</title>
        <meta name="description" content="BM News - Breaking News and Latest Updates" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Navbar />

      <header className={styles.header}>
      
        
      </header>
     
      <Caarousel/>
      <main className={styles.main}>
      
        <h1 className={styles.title}>Welcome to BM News</h1>
        <p className={styles.description}>We bring you the latest news and updates from around the world.</p>

        <div className={styles.grid}>
        
          <div className={styles.card}>
            <h3>Breaking News &rarr;</h3>
            <p>Stay up-to-date with the latest breaking news from around the world.</p>
<a href="#" className={styles.cardLink}>Read More</a>
</div>
<div className={styles.card}>
        <h3>Sports News &rarr;</h3>
        <p>Get the latest sports news from your favorite teams and athletes.</p>
        <a href="#" className={styles.cardLink}>Read More</a>
      </div>

      <div className={styles.card}>
        <h3>Entertainment News &rarr;</h3>
        <p>Stay updated on your favorite movies, TV shows, and celebrities.</p>
        <a href="#" className={styles.cardLink}>Read More</a>
      </div>

      <div className={styles.card}>
        <h3>Technology News &rarr;</h3>
        <p>Discover the latest tech news, gadgets, and innovations.</p>
        <a href="#" className={styles.cardLink}>Read More</a>
      </div>
    </div>
    
  </main>


    
  
</div>
)
}
 export default withAuth(Home)
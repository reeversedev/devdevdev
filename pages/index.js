import Head from 'next/head';
import Header from '../components/header';
import '../sass/pages/_app.scss';
import HomePage from '../components/homepage';

const Home = () => (
  <div className="container">
    <Head>
      <title>dev dev dev</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <HomePage />
  </div>
);

export default Home;

import Head from 'next/head';
import Header from '../components/header';
import '../sass/pages/_app.scss';
import HomePage from '../components/homepage';

const Home = () => (
  <div className="container">
    <Header />
    <HomePage />
  </div>
);

export default Home;

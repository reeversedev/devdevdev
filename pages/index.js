import HomePage from '../components/homepage';
import Layout from '../components/layout';
import Category from './category/[slug]';

const Home = () => (
  <Layout>
    <Category />
  </Layout>
);

export default Home;

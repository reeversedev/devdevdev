import Header from './header';
import '../sass/pages/_app.scss';

const Layout = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;

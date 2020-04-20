import Header from './header';
import '../sass/pages/_app.scss';
import Toolbar from './toolbar';

const Layout = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
      <div className="d-flex flex-sm-column align-items-center align-items-sm-start justify-content-between sticky-toolbar d-lg-none">
        <Toolbar />
      </div>
    </div>
  );
};

export default Layout;

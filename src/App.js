import {Fragment} from 'react';
import HeaderSite from './components/HeaderSite';
import MainSite from './components/MainSite';
import FooterSite from './components/FooterSite';

function App() {
  return (
    <Fragment>
      <HeaderSite />
      <MainSite />
      <FooterSite />
    </Fragment>
  );
}

export default App;

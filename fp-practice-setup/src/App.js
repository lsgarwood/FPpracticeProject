import './css/App.css';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import SearchCriteria from './components/SearchCriteria';
import Header from './components/Header';
import SearchResultBrowser from './components/SearchResultBrowser';
import Footer from './components/Footer';

function App() {

  return (
    <div className='App'>
      <div className='sidenav'>
        <SearchCriteria className="search-criteria"/>
      </div>
      <div className='browser'>
          <Header/>
          {/* <BrowserRouter> */}
          {/* <Routes>
              <Route path="/" element ={}/>
              <Route path="" element ={}/>
          </Routes> */}
        {/* </BrowserRouter> */}
          <SearchResultBrowser/>
          <Footer/>
      </div>
      
    </div>
  );
}

export default App;

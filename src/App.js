import './App.css';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Header from './components/Header/Header';
import SimpleBottomNavigation from "./components/MainNav"
import { Container } from '@material-ui/core';
import Trending from './Pages/Trending/Trending'
import Movies from './Pages/Movies/Movies'
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
 
// BrowserRouter is used to wrap up all the application that is going to be inside of our router of React Router Dom.
//New Declaration of Routes is given below.
function App() {
  return (
    <BrowserRouter> 
      <Header />
    <div className="app">
    <Container>
      <Routes >
        <Route path= '/' element= {<Trending />} /> 
        <Route path= '/movies' element= {<Movies />} />
        <Route path= '/series' element= {<Series />} />
        <Route path= '/search' element= {<Search />} />
      </Routes >
    </Container>
    </div>
    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

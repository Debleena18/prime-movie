import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import SimpleBottomNavigation from "./components/MainNav"
import { Container } from '@material-ui/core';
 

function App() {
  return (
    //It is used to wrap up all the application that is going to be inside of our router of React Router Dom.
    <BrowserRouter> 
      <Header />
    <div className="app">
    <Container>
      <Switch>
        <Route path= '/' component= {Trending} exact /> //Keyword "Exact" because if "/" route is inside other routes it doesn't overlap.
        <Route path= '/movies' component= {Movies} />
        <Route path= '/series' component= {Series} />
        <Route path= '/search' component= {Search} />
      </Switch>
    </Container>
    </div>
    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

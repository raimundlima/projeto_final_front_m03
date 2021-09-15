import './App.scss';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FilmeAdd from './pages/FilmeAdd/FilmeAdd';
import FilmeView from './pages/FilmeView/FilmeView';
import FilmeEdit from './pages/FilmeEdit/FilmeEdit';

function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/add" component={FilmeAdd}/>
          <Route path="/view/:id" component={FilmeView}/>
          <Route path="/edit/:id" component={FilmeEdit}/>

        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
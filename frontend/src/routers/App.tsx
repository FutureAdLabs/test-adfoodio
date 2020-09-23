
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Dashboard from '../pages/Dashboard/Dashboard';
import Menu from '../pages/Menu/index';
import NotFound from '../pages/NotFound/index';
import Category from '../components/molecule/Category/index';
//import Content from '../components/molecule/Content/Content';


const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} >
        <Route path="/category" component={Category} />
      </Route>
      <Route exact path="/menu" component={Menu} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App;
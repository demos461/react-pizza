import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';

import './scss/app.scss';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;

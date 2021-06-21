import React from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'

import { Header } from './components'
import { Home, Cart } from './pages'

import './scss/app.scss';


function App() {

  const [pizzas, setPizzas] = React.useState([])  

  React.useEffect(()=> {
    axios.get('http://localhost:3000/db.json').then(({data})=> {
      setPizzas(data.pizzas)
    })
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path='/' render={() => <Home items={pizzas} />} exact/>
          <Route path='/cart' component={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;

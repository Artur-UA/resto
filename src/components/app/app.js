import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
//import WithRestoService from '../hoc/with-resto-service'
import {Route, Switch} from 'react-router-dom'

import Background from './food-bg.jpg';

const App = (/* {RestServ} */) => { //RestoService это то что придет из компонента высшего порядка(WithRestoService). это будет как property 
//    console.log(RestServ.getMenuItem())
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path='/' component={MainPage}/>
                <Route path='/cart' component={CartPage}/>
                <Route path='/:id' component={CartPage}/>
            </Switch>
        </div>
    )
}

//export default WithRestoService()(App)//запустим компонент высшего порядка который примет в себя как аргумент компонент app/ она его правильно отрендерит о обернет в consumer 


export default App;
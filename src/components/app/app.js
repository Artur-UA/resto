import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
//import WithRestoService from '../hoc/with-resto-service'
import Background from './food-bg.jpg';
import {Route, Switch} from 'react-router-dom'



const App = () => { //RestoService это то что придет из компонента высшего порядка(WithRestoService). это будет как property .. удалил из параметров WithRestoService
//    console.log(RestServ.getMenuItem())
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={56}/>
            <Switch>
                <Route path='/' exact component = {MainPage}/>
                <Route path='/cart' exact component = {CartPage}/>
                <Route path='/:id' component={CartPage}/> 
            </Switch>
        </div>
    )
}


//export default WithRestoService()(App)//запустим компонент высшего порядка который примет в себя как аргумент компонент app/ она его правильно отрендерит о обернет в consumer 


export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import ErrorBoundry from './components/error-boundry'
import RestServ from './services/resto-service'
import RestoServiceContext from './components/resto-service-context/'
import store from './store'

import './index.scss';

const restServ = new RestServ() //создаем экземпляр сервиса 

ReactDOM.render(
    <Provider store={store}> {/* все что ниже по иерархии, сможет до него достучатся */}
        <ErrorBoundry>{/* граница ошибок, которое может возникнуть ниже по иерархии */}
            <RestoServiceContext.Provider value={restServ}>{/* то что идет от контекста, обьязательно должно быть value */}
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));


import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => { //Wrapped это компонент 
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {//функциоаньный компонент, поэтому можно открыть скобки 
                    (RestServ) => { //RestService из app придет (provider) 
                        return<Wrapped {...props} RestServ={RestServ}/>  //говорит о том, что нам нужны все ...props которые были сюда переданы, мы их сразу деструктурируем 
                }}
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;

//это компонент высшего порядка. он нам нужен только для того, чтобы не писать везде Consumer, это нужно чтбы передавать везде state где нужно 
//сюда приходит компонент, он сверху оборачивается в Consumer и внуть помещается сам компонент со всеми props -ами своими и с RestoService(это то что придет из Provider )
import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => { //Wrapped это компонент 
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (RestoService) => { //RestoService из app придет (provider) 
                        return<Wrapped {...props} RestoService={RestoService}/>  //говорит о том, что нам нужны все ...props которые были сюда переданы, мы их сразу деструктурируем 
                }}
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;
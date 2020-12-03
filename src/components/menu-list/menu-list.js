import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux'
import WithRestoService from '../hoc'//это компонент высшего порядка. он нам нужен только для того, чтобы не писать везде Consumer, это нужно чтбы передавать везде state где нужно        MenuList получает из констекста доступ к сервису 
import './menu-list.scss';

class MenuList extends Component {
    
    componentDidMount(){
        const {RestServ} = this.props; //приходит из WithRestoService, а туда они приходит аж из app.js, а туда приходит из папки services/resto-service

        RestServ.getMenuItem() //экземпляр уже создан ранее в app.js. ПО этому можно сразу идти к getMenuItem. там мы получаем promise/ и сейчас его нужно обработать
        .then(res => {
            console.log(res);
        })

    }

    render() {
        const {menuItems} = this.props; //вытягиваем из props и сразу деструктурируем 

        return (
            <ul className="menu__list">
                {
                    menuItems.map((menuItem) => {//приходит массив, который перебираем и потом данные по каждому пункту меню(ресторанное) передаем в menu-list-item b там каждое по отдельности рендерим 
                        return <MenuListItem 
                                    key={menuItem.id} 
                                    menuItem={menuItem}/>//на основании єтих данніх будет построена карточка
                    }) 
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return{
        menuItems: state.menu //state.menu это то что мы создали в index.js, главный state.  Это записывается в menuItems, он вытягивается в render (в этом же файле) и тут же вытягивается, а потом он разбирается методом map b отправляется поштучно в MenuListItem, где уже подставляется в нужные места 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuLoaded: (newMenu) =>
    }
}

export default WithRestoService()(connect(mapStateToProps)(MenuList));//композиция компонентов высшего порядка 
//connect позволяет связать вместе наш компонент и redux  //mapStateToProps говорим каие именно свойства из нашего store  будем использовать в этом компоненте
import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux'
import WithRestoService from '../hoc'
import './menu-list.scss';

class MenuList extends Component {

    render() {
        const {menuItems} = this.props;

        return (
            <ul className="menu__list">
                {
                    menuItems.map((menuItem) => {//приходит массив, который перебираем и потом данные по каждому пункту меню(ресторанное) передаем в menu-list-item b там каждое по отдельности рендерим 
                        return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                    }) 
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return{
        menuItems: state.menu
    }
}

export default WithRestoService()(connect(mapStateToProps)(MenuList));//композиция компонентов высшего порядка 
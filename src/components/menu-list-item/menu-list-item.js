import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddCart}) => {

    const {title, price, url, category} = menuItem;



    return (
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button onClick={() => onAddCart()} className="menu__btn">Add to cart</button>
                <div className={`menu_category_logo ${category}`}></div> 
 
            </li>
    )
}

export default MenuListItem;


/* switch (category) {
    case "salads":
        return <img src='https://ohsheglows.com/gs_images/2013/09/choppedsaladsquare-9694-256x256.jpg' alt=''></img>;
    case "pizza":
        return <img src='https://ambar.net.ua/image/data/menu/pizza.png' alt=''></img>;
    case "meat":
        return <img src='https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/e/e9/Raw_Meat.png/revision/latest/scale-to-width-down/1200?cb=20150704150605' alt=''></img>;
    default:
        return "no category";
} */
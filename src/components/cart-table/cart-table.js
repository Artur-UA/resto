import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux'

const CartTable = ({items, onDelete}) => {//byaf придет из пропс и сразу будет деструктуризирована 
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id } = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => onDelete(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div> 
        </>
    );
};
const mapStateToProps = (state) => {
    return{
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onDelete: (id) => {
            console.log(`Удалили ${id}`)
/*             dispatch(onDelete(id)) */
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
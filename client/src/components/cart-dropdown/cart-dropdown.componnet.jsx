import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {createStructuredSelector} from 'reselect'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropDown =({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems?.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                : 
                <span className="empty-message">your cart is empty</span>
            }
        </div>

<CustomButton onClick={() => {
    history.push('/checkout')
    dispatch(toggleCartHidden())}}>To CHECKOUT</CustomButton>


    </div>
) 

const mapStateToProps =createStructuredSelector({
    cartItems: selectCartItems
})



export default withRouter(connect(mapStateToProps)(CartDropDown));
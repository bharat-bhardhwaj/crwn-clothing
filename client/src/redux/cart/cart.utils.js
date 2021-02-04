


export const addItemToCart =(CartItems,cartItemToAdd) => {
    
    const existingCartItem = CartItems.find(CartItem => CartItem.id == cartItemToAdd.id)

    if(existingCartItem) {
        return CartItems.map(cartItem => 
            cartItem.id == cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem)
    }


    console.log(CartItems,cartItemToAdd)

    return [...CartItems,{...cartItemToAdd, quantity: 1}];
    

}


export const removeItemFromCart =(cartItems,cartItemToRemove) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id )
    }

    return cartItems.map(
        cartItem => 
        cartItem.id === cartItemToRemove.id ?
        {...cartItem,quantity:cartItem.quantity - 1}
        : cartItem
    )
}
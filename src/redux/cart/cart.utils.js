

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
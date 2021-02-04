import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;

    const publishableKey ='pk_test_51ID4AcAz2BXietzq7MGHPWkNegSw18cbh06uX87d5zRQBZvZ55CmnQtSFvCXO4nkuC30ROLRLWcm6O32oiUqURnm00XnPgcsrk'

    const onToken =token => {
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        }).then(response  => {
            alert('payment successful')
        }).catch(error => {
            console.log('Payment error')
            alert(
                'There was an issue with your payment. Please sure you use the provided credit card '
            )
        })
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Crwn Clothing'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
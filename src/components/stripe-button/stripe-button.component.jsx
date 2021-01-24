import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;

    const publishableKey ='pk_test_51ID4AcAz2BXietzq7MGHPWkNegSw18cbh06uX87d5zRQBZvZ55CmnQtSFvCXO4nkuC30ROLRLWcm6O32oiUqURnm00XnPgcsrk'

    const onToken =token => {
        console.log(token)
        alert('payment succesful')
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Crwn Clothing'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
import React, { useEffect } from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

const Checkout = ({ selectedProduct, history, user }) => {
const REACT_STRIPE_API_KEY=process.env.REACT_STRIPE_API_KEY;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <StripeProvider apiKey={REACT_STRIPE_API_KEY}>
      <Elements>
        <CheckoutForm user = {user} selectedProduct={selectedProduct} history={history} />
      </Elements>
    </StripeProvider>
  )
}

export default Checkout
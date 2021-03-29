import React, {useContext} from 'react';
import {PayPalButton} from 'react-paypal-button';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {

  const {state, addNewOrder} = useContext(AppContext)
  const {cart, buyer} = state;

  const history = useHistory()

  const handleSumTotal = () => {
    const reducer = (acum, currentValue) => acum + currentValue.price;
    const sum = cart.reduce(reducer, 0)
    return sum;
  }


  const paypalOptions = {
    clientId: 'ATfzDQOVoOADkz39f_g7sZikdEDd1FfjaxzWV0MMaz4exqT1nC3TEKft7XnA7YruoaHdrAhcrOwJj-S6',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSucces = (data) => {
    console.log(data)
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      }
      addNewOrder(newOrder)
      history.push('/checkout/succes')
    }
  }

  return (
    <section className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map(item => (
            <div className="Payment-item" key={item.id}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))
        }
        <div className="Payment-button">
          <PayPalButton
            paypalOptions= {paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={()=> console.log('Start payment')}
            onPaymentSuccess={data => handlePaymentSucces(data)}
            onPaymentError={error=> console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default Payment;
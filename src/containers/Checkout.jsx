import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css'

const Chechout = () => {
  const {state, removeFromCart} = useContext(AppContext);
  const {cart} = state;

  const handelRemove = product => () => {
    removeFromCart(product)
  }

  const handleSumTotal = () => {
    const reducer = (acum, currentValue) => acum + currentValue.price;
    const sum = cart.reduce(reducer, 0)
    return sum;
  }
  
  return (
    <section className="Checkout">
      <section className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        {
          cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin pedidos...</h3>
        }
        {
          cart.map(item => (
            <div className="Checkout-item" key={item.id}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
              <button type="button" onClick={handelRemove(item)}>
              <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ))
        }
      </section>
      <section className="Checkout-sidebar">
        <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
        <Link to='/checkout/information'>
          <button type="button">Continuar pedido</button>
        </Link>
      </section>
    </section>
  )
}

export default Chechout;
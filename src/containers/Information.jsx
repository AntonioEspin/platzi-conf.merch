import React, {useRef, useContext} from 'react';
import AppContext from '../context/AppContext';
import {Link, useHistory} from 'react-router-dom';
import '../styles/components/Information.css'

const Information = () => {

  const {state, addToBuyer} = useContext(AppContext);

  const form = useRef(null)

  const {cart} = state

  const history = useHistory()

  const handleSubmit = () => {
    console.log('funciona')
    const formData = new FormData(form.current)

    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }

    addToBuyer(buyer)
    history.push('/checkout/payment')
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact Information:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <label htmlFor="name">
              <input type="text" placeholder="Nombre completo" name="name" id="name" />
            </label>
            <label htmlFor="email">
              <input type="text" placeholder="Correo electrónico" name="email" id="email" />
            </label>
            <label htmlFor="address">
              <input
                type="text"
                placeholder="Dirección"
                name="address"
                id="address"
              />
            </label>
            <label htmlFor="apto">
              <input type="text" placeholder="APT" name="apto" id="apto" />
            </label>
            <label htmlFor="country">
              <input
                type="text"
                placeholder="Pais"
                name="country"
                id="country"
              />
            </label>
            <label htmlFor="state">
              <input type="text" placeholder="Estado" name="state" id="state" />
            </label>
            <label htmlFor="city">
              <input type="text" placeholder="Ciudad" name="city" id="city" />
            </label>
            <label htmlFor="cp">
              <input type="text" placeholder="Código postal" name="cp" id="cp" />
            </label>
            <label htmlFor="phone">
              <input type="text" placeholder="Teléfono" name="phone" id="phone" />
            </label>
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to='/checkout'>
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
    </div>
    <h3>Order Summary:</h3>
    <div className="Information-sidebar">
    {
      cart.map(item=>(
          <div className="Information-item" key={item.id}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
      ))
    }
    </div>
  </div>
  )
}

export default Information;
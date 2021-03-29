import React, {useContext} from 'react';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Succes = () => {
  const {state} = useContext(AppContext);
  const {buyer} = state;
  const location = useGoogleAddress(buyer[0].address);
  return (
    <section className="Succes">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </section>
  )
}

export default Succes;
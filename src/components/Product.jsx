import React from 'react'

const Product = ({product, handleAddToCart}) => {
  return (
    <section className="Products-item">
      <img src={product.image} alt={product.title}/>
      <div className="Products-item-info">
        <h2>{product.title}
          <span>{product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
    </section>
  )
}

export default Product;
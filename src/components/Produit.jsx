import React from 'react'
import styles from './produit.module.css'

export default function Produit({produit, handleClick}) {
  return (
    <div className={styles.produit}>
        <img src={produit.images[0]} alt={produit.title} />
        <h4>{produit.title}</h4>
        <p>{produit.description}</p>
        <h5>Prix : {produit.price}</h5>
        <button onClick={() => handleClick(produit)}>Ajouter panier</button>
    </div>
  )
}

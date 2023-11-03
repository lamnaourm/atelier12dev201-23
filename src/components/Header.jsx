import React from 'react'
import styles from './header.module.css'

export default function Header({panier}) {
  return (
    <div className={styles.header}>
        <p>ISMO SHOP</p>
        <p>
            nombre de produit : {panier.length} - 
            Montant : {panier.reduce((som,p) => som+p.price, 0)}
        </p>
    </div>
  )
}

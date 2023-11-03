import axios from 'axios'
import React, { Component } from 'react'
import Produit from './Produit'
import styles from './listproduit.module.css'

export default class ListProduits extends Component {

    state = {
        categories: [],
        CatId: -1,
        produits: []
    }
    render() {
        return (
            <div className={styles.list}>
                <select value={this.state.CatId} onChange={(e) => this.setState({ CatId: e.target.value })}>
                    <option value="0">Tous les produits</option>
                    {
                        this.state.categories.map(c =>
                            <option key={c.id} value={c.id}>{c.name}</option>
                        )
                    }
                </select>

                <div className={styles.products}>
                    {this.state.produits.map(p =>
                        <Produit produit={p} />
                    )}
                </div>
            </div>
        )
    }

    componentDidMount() {
        const getCategories = async () => {
            const res = await axios.get('https://api.escuelajs.co/api/v1/categories')
            return res.data;
        }

        getCategories().then(cats => this.setState({ categories: cats, CatId:0 }))
    }

    componentDidUpdate(prevpros, prevstate) {
        if(prevstate.CatId !== this.state.CatId){
            const getProduits = async () => {
                let res 
                if(this.state.CatId ===0)
                    res = await axios.get('https://api.escuelajs.co/api/v1/products')
                else
                    res = await axios.get(`https://api.escuelajs.co/api/v1/categories/${this.state.CatId}/products`)

                return res.data;
            }
    
            getProduits().then(prods => this.setState({ produits: prods }))
        }
    }
}

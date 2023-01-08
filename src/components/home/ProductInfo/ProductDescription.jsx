import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserCart } from '../../../store/slices/cart.slice'
import getConfig from '../../../utils/getConfig'

const ProductDescription = ({ product }) => {

    const [counter, setCounter] = useState(1)

    const handlePlus=() =>{
        setCounter(counter+1) 
    }

    const handleMinus=() =>{
        if(counter - 1 > 0){
            setCounter(counter-1) 
        }
    }

    const dispacth = useDispatch()

    const handleCart=() =>{
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
        const data = {
            id: product.id,
            quantity: counter
          }   

        axios.post(URL, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispacth(getUserCart())

        })
        .catch(err => console.log(err))
         
    }

    return (
        <article>
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <section>
                <span>Price</span>
                <h3>{product?.price}</h3>
            </section>
            <section>
                <h3>Quantity</h3>
                <div>
                    <div onClick={handleMinus}>-</div>
                    <div>{counter}</div>
                    <div onClick={handlePlus}>+</div>
                </div>
            </section>
            <button onClick={handleCart}> Add to Cart <i className="fa-sharp fa-solid fa-cart-plus"></i></button>
        </article>
    )
}

export default ProductDescription
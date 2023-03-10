import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingOrderProducts, descendingOrderProducts } from '../../store/slices/products.slice'

const ToOrderProducts = () => {
    
    const dispatch =  useDispatch()
    
    const handleAcending=()=>{
        dispatch (ascendingOrderProducts())
    }
    const handleDescending=()=>{
        dispatch (descendingOrderProducts())
    }

  return (


    <div>
        <button onClick={handleAcending}>Ascending Order</button>
        <button onClick={handleDescending}>Descending Order</button>
    </div>
  )
}

export default ToOrderProducts
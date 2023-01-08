import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import ToOrderProducts from '../components/home/ToOrderProducts'
import './styles/home.css'

const Home = () => {

    const products = useSelector(state => state.products)
    const [inputValue, setInputValue] = useState()
    const [productsFilter, setProductsFilter] = useState()
    const [inputPrice, setInputPrice] = useState({
        from: 0,
        to: Infinity
    })

    useEffect(() => {
        if (products) {
            setProductsFilter(products)
        }
    }, [products])


    const handleChange = e => {
        const inputValue = e.target.value.toLowerCase().trim()
        const filter = products?.filter(prod => prod.title.toLowerCase().includes(inputValue))
        setProductsFilter(filter)
        setInputValue(e.target.value)
    }

    const filterCallBack = prod => +prod.price >= inputPrice.from
        && +prod.price <= inputPrice.to

    return (
        <div>
            <div className="home">

                <div className="filter__all">
                    <input value={inputValue} onChange={handleChange} type="text" /><br></br><br></br>

                    <FilterPrice
                        setInputPrice={setInputPrice} />
                    <FilterCategory setInputValue={setInputValue} />
                    <ToOrderProducts />

                </div>

               
                <div className="products-container">
                    {
                        productsFilter?.filter(filterCallBack).length !== 0 ?
                            productsFilter?.filter(filterCallBack).map(product => (
                                <CardProduct
                                    key={product.id}
                                    product={product}
                                />

                            ))
                            :
                            <h1>No exist products to this filter</h1>
                    }
                </div>

            </div>

        </div>
    )
}

export default Home
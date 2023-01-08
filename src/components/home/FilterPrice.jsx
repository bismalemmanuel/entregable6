import React from 'react'
import './Style/filter.css'

const FilterPrice = ({ setInputPrice }) => {

  const handleSubmit = e => {

    e.preventDefault()
    const inputFrom = +e.target.from.value
    const inputTo = +e.target.to.value
    if (inputFrom && inputTo) {
      setInputPrice({
        from: inputFrom,
        to: inputTo
      })
    } else if (!inputFrom && inputTo) {
      setInputPrice({
        from: 0,
        to: inputTo
      })
    } else if (inputFrom && !inputTo) {
      setInputPrice({
        from: inputFrom,
        to: Infinity
      })
    } else {
      setInputPrice({
        from: 0,
        to: Infinity
      })
    }
  }

  const handleClick=e=>{
    e.preventDefault
    console.log(e.target.children[1].classList.toggle("price__visible"))
      
  }

  return (
    <section className='filter__price'>

      <div onClick={handleClick}  className="price">
      <h2 className='price__h2'>Price</h2>
        <form onSubmit={handleSubmit} className="price__visible" >
          <div>
            <label htmlFor="from">From </label>
            <input type="number" id='from' />
          </div>
          <div>
            <label htmlFor="to">To </label>
            <input type="number" id='to' />
          </div>
          <button className='apply'>Apply</button>
        </form>
      </div>
    </section>
  )
}

export default FilterPrice
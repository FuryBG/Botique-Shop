import React from 'react'
import { Link } from 'react-router-dom'
import './ProductForm.scss'

export default function ProductForm() {
  return (
    <div className='product-card'>
        <div className='image-wrapper'>
            <img src={'/whitesneakers-2048px-4187.jpg'} />
            <Link className='view' to={"/product/1"}>VIEW</Link>
        </div>
        <div className='intro'>
            <h3>PRODUCT NAME</h3>
            <div className='price'>
                <p>$300</p>
                <p className='promotion'>$150</p>
            </div>
        </div>
    </div>
  )
}

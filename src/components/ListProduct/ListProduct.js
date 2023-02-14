import React from 'react'
import FilterNavigation from '../shared/FilterNavigation/FilterNavigation';
import ProductForm from '../shared/ProductForm/ProductForm';
import './ListProduct.scss';

export default function ListProduct() {
  return (
    <section >
      <FilterNavigation />
      <div className='list-product'>
      <ProductForm />
      <ProductForm />
      <ProductForm />
      <ProductForm />
      </div>
    </section>
  )
}

import React from 'react'
import ProductForm from '../shared/ProductForm/ProductForm';
import './Product.scss';
import ProductLanding from '../shared/ProductLanding/ProductLanding';

export default function Product() {
    const productInfo = {
        images: ['http://localhost:3000/image-1.jpg', 'http://localhost:3000/image-2.jpg', 'http://localhost:3000/image-3.jpg'],
        caption: "White sneakers",
        price: "249.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis pellentesque dui et interdum. Aliquam vestibulum, diam eget consectetur sodales, felis sapien fringilla urna, et volutpat nunc erat in ipsum. Duis sagittis auctor sem facilisis blandit. Aliquam dignissim neque ante, ac dignissim ligula commodo id. Nullam id commodo orci. Duis feugiat tincidunt odio nec tincidunt. Nulla in ante vitae nulla euismod auctor non ac nunc.",
        colors: ["white", "black", "yellow", "blue", "red"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    }
    
  return (
    <section>
        <ProductLanding />
        <h2>YOU MAY LIKE:</h2>
        <div className='others'>
            <ProductForm></ProductForm>
            <ProductForm></ProductForm>
            <ProductForm></ProductForm>
        </div>
    </section>
  )
}

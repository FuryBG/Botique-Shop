import React from 'react'
import ImageModal from '../ImageModal/ImageModal';
import { useState } from 'react';
import './ProductLanding.scss'

export default function ProductLanding() {
  const [ isOpen, setIsOpen ] = useState(false);
  const images = ['http://localhost:3000/image-1.jpg', 'http://localhost:3000/image-2.jpg', 'http://localhost:3000/image-3.jpg'];
  
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  let array = ["S", "M", "L", "XL", "XXL"];
  function showSizes(el) {
    if (el.currentTarget.children[1].style.display === "block") {
      el.currentTarget.children[1].style.display = "none";
    }
    else {
      el.currentTarget.children[1].style.display = "block";
    }
  }

  function selectSize(el, value) {
    el.target.parentNode.parentNode.parentNode.children[0].value = `SIZES: ${value}`;
  }

  return (
    <div className='product-landing'>
      <ImageModal isOpen={isOpen} images={images} closeFunction={closeModal}></ImageModal>
      <div className='image-wrapper-landing'>
        <img onClick={() => openModal()} src={'/whitesneakers-2048px-4187.jpg'}></img>
      </div>
      <div className='information-landing'>
        <h3>Sneakers</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis pellentesque dui et interdum. Aliquam vestibulum, diam eget consectetur sodales, felis sapien fringilla urna, et volutpat nunc erat in ipsum. Duis sagittis auctor sem facilisis blandit. Aliquam dignissim neque ante, ac dignissim ligula commodo id. Nullam id commodo orci. Duis feugiat tincidunt odio nec tincidunt. Nulla in ante vitae nulla euismod auctor non ac nunc.</p>
        <div className='controls'>
          <div className='control-btn'>
            <input type={'button'} value={'ADD TO CART'} />
          </div>
          <div className='control-btn'>
            <input type={'button'} value={'COLORS'} />
          </div>
          <div className='control-btn' onClick={showSizes}>
            <input type={'button'} value={'SIZES'} />
            <div className='sizes-dropdown'>
              <ul>
                {array.map(x => <li key={x} onClick={(el) => selectSize(el, x)}>{x}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import ReactDOM  from 'react-dom';
import  './ImageModal.scss'

export default function ImageModal({ isOpen, images, closeFunction }) {
    const [index, setIndex] = useState(0);
    function chooseImage(num) {
        if(index + num < 0) {
            setIndex(images.length - 1);
        }
        else if(index + num >= images.length) {
            setIndex(0);
        }
        else {
            setIndex(index + num);
        }
    }
    
if(!isOpen) return null;
  return ReactDOM.createPortal(
    <>
    <div onClick={() => closeFunction()} className='overlay'>
        <p>X</p>
    </div>
    <div className='modal'>
        <p onClick={() => chooseImage(-1)}>←</p>
        <img src={images[index]}></img>
        <p onClick={() => chooseImage(1)}>→</p>
    </div>
    </>,
   document.getElementById("modal"))
}

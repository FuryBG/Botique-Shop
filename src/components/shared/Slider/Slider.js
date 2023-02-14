import React, { useState } from 'react'
import './Slider.scss'

export default function Slider( { slides }) {
    let [ index, setIntex ] = useState(0);

    function showSlide(id) {
        setIntex(id);
    }

    return (
        <div className='slider-wrapper'>
            <img src={slides[index].url} className='image'></img>

            <div className='dots-wrapper'>
                {slides.map((slide, slideIndex) => (
                    slideIndex == index 
                    ? 
                    <p key={slide.title} onClick={() => showSlide(slideIndex)} className='dot'>•</p> 
                    : 
                    <p key={slide.title} onClick={() => showSlide(slideIndex)} className='dot-selected'>•</p>
                ))}
            </div>
        </div>


    )
}

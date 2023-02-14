import React from 'react'
import './FilterNavigation.scss'

export default function FilterNavigation() {
  return (
    <div className='filter-container'>
        <p>COLORS</p>
        <div className='colors'>
            <p >•</p>
            <p className='red'>•</p>
            <p className='blue'>•</p>
            <p className='yellow'>•</p>
            <p className='green'>•</p>
        </div>
        <p>SIZES</p>
        <div className='sizes'>
            <p>XS</p>
            <p>S</p>
            <p>L</p>
            <p>XL</p>
            <p>XXL</p>
        </div>
    </div>
  )
}

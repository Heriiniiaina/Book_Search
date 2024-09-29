import React from 'react'
import Navbar from '../components/Navbar'
import SearchFrom from '../components/SearchFrom'
import DisplayBook from '../components/DisplayBook'

export default function Home() {
  return (
   <>
        <div className="homePage">
            <h1>Best way to find your book</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, labore.</p>
            <SearchFrom/>
        </div>
        <div className="list">
            <DisplayBook/>
        </div>
   </>
  )
}

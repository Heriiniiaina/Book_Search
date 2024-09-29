import React, { useEffect, useState } from 'react'
import {FaSearch} from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { fetchData } from '../redux/action/action'

export default function SearchFrom() {
    const URL = "https://openlibrary.org/search.json?title="
    const [bookTitile,setTitle] = useState("")
   const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchData(bookTitile))
    },[dispatch,bookTitile])
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (

    <div className='formSearch' onClick={handleSubmit}>
        <form action="">
            <input type="text" placeholder='search your book ' onChange={e=>setTitle(e.target.value)}/>
            <button type="submit" className='btn'>
                <FaSearch/>
            </button>
        </form>
    </div>
  )
}

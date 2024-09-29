import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayBook() {
    const data = useSelector((state)=>state.data.data.docs)
    const cover = "https://covers.openlibrary.org/b/id/240727-S.jpg"
    console.log(data)
  return (
    <div className='list-books'>
        {
            data.map((book)=>(
                <div className='book'>
                    <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`} alt="" width={200} height={200} />
                    <h4>{book.title}</h4>
                    <p><strong>Author: </strong>{book.author_name}</p>
                    <p><strong>Total editions: </strong>{book.edition_count}</p>
                    <p><strong>First publish year: </strong> {book.first_publish_year}</p>
                </div>
                
            ))
        }
    </div>
  )
}

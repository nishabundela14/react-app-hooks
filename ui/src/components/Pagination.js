import React from 'react'

const Pagination = ({limit, totalPage, paginate}) => {
    const pageNumber = []

    for (let i=0; i< Math.ceil(totalPage/limit);i++){
        pageNumber.push(i+1)
        console.log("Pagination -> i", i)
    }

    return (
        <nav>
            <ul className="link">
                {
                 pageNumber.map(number => (
                     <li key={number} className="list-link">
                         <button className="my" onClick={() => paginate(number)} href="#">{number}</button>
                     </li>
                 ))
                }
            </ul>
        </nav>
    )
}

export default Pagination

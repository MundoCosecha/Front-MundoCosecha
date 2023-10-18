import React from 'react'

export const Search = () => {
  return (
    <div className="m-5">

    <form className="d-flex" role="search">
   <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"></input>
   <button className="btn btn-success" type="submit">Search</button>
    </form>

    </div>
  )
}

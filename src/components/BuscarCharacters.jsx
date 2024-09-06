import React, { useState } from 'react'

export const BuscarCharacter = ({ handleSearch }) => {

    const [personaje, setPersonaje] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(personaje)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setPersonaje(e.target.value)}}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}
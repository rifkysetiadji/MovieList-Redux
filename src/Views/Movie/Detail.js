import React from 'react'

export default function Detail(props) {
    let {tabToggle,movie_detail}=props
    return (
        <div data-testid="detail-container">
            <a data-testid="back-btn" href="#" onClick={()=>tabToggle('list')}>Kembali</a>
            <br/>
            <img src={movie_detail.Poster}/>
            <h1>{movie_detail.Title}</h1>
            <p>Year : {movie_detail.Year}</p>
            <p>IMBD Id : {movie_detail.imdbID}</p>
            <p>Plot : {movie_detail.Plot}</p>
        </div>
    )
}

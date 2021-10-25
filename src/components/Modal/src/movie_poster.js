import React from 'react'

export default function Movie_poster({modal_data}) {
    return (
        <div>
            <img src={modal_data} style={{width:'100%',objectFit:'contain'}}/>
        </div>
    )
}

import React from 'react'

export const GifGridItem = ({id,title,url}) => {

    console.log(id,title,url);
    return (
        <div className="animate__animated animate__fadeInDown">
            <img src={url} alt="hola"/>
            <p>{title}</p>
        </div>
    )
}

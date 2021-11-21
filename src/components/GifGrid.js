// import { useEffect,useState } from "react"
import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({category}) => {

    //Estado

    // const [images, setimages] = useState([]);

   

     const {data:images ,loading} = useFetchGifs(category);
     console.log(loading);


    return (
        <>


            <h3 className="animate__animated animate__fadeInDown">{category}</h3>
            <div className="card-grid">

            {loading && <p>Loading</p>}

                        {
                            images.map( img => (

                                <GifGridItem
                                    key={img.id}
                                    {...img}

                                />
                            ))

                        }


            </div>

        </>
    )
}

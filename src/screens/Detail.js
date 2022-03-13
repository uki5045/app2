import React, {useEffect, useState} from 'react';
import {useParams, useLocation} from "react-router-dom";
import axios from "axios";


const Detail = () => {

    const params = useParams()
    const location = useLocation()

    const [item, setItem] = useState({})

    const getItem = async () => {

        try {
           const {data, status} = location.pathname.includes('movie')
                ? await axios.get(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`)
                : await axios.get(`https://api.themoviedb.org/3/tv/${params.tvId}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`)
            if (status === 200) {
                setItem(data)
            }
        } catch (err) {
            console.log(err.response.data.message)
        }
    }

    useEffect(() => {
        getItem()
    }, [])

    // const movie = location.pathname.includes('movie')



    return (
        <div>
            <h1>
                {item.title
                    ? item.title
                    : item.name
                }
            </h1>
            {/*<h1>{params.movieId}</h1>*/}
        </div>
    );
};

export default Detail;
import React from 'react';
import {useParams, useLocation} from "react-router-dom";

const Detail = () => {

    const params = useParams()
    const location = useLocation()

    console.log(location)

    const movie = location.pathname.includes('movie')
    


    return (
        <div>
            <h1>
            {
                movie
                    ? params.movieId
                    : params.tvId
            }
            </h1>
            {/*<h1>{params.movieId}</h1>*/}
        </div>
    );
};

export default Detail;
import React, {useEffect, useState} from 'react';
import { Button, Container, Card, Col, Row} from 'react-bootstrap'
import axios from "axios";
import {Poster, Box} from "../components";

const Tv = () => {

    const [tvs, setTvs] = useState([])

    const getData = async () => {
        try {
            const { data } = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1')
            setTvs(data.results)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Box title={'TvList'}>
            {tvs.map(tv => (
                <Poster
                    title={tv.name}
                    desc={tv.overview}
                    to={`/tv/${tv.id}`}
                    poster={'https://image.tmdb.org/t/p/w500'+tv.poster_path}
                    key={tv.id}
                />
            ))}
        </Box>
    );
};

export default Tv;
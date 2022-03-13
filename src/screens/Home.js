import React, {useEffect, useState} from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import axios from "axios";
import {Poster, Box} from "../components";




const Home = () => {
    const [movies, setMovies] = useState([])

    const getData = async () => {
        try {
            const {data, status} = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1')
            if (status === 200) {
                setMovies(data.results)
            }
        } catch (err) {
            console.log(err)
        }
    }

   useEffect(() => {
       getData()
   }, [])

    return (
        <Box title={'Movies'}>
            {movies.map(movie => (
                <Poster
                    title={movie.title}
                    desc={movie.overview}
                    poster={'https://image.tmdb.org/t/p/w500'+movie.poster_path}
                    to={`/movie/${movie.id}`}
                    key={movie.id}
                />
            ))}
        </Box>
        // <Container>
        //    <Row>
        //        {movies.map(movie => (
        //            <Poster
        //                key={movie.id}
        //                title={movie.title}
        //                desc={movie.overview}
        //                poster={movie.poster_path}
        //            />
        //        ))}
        //    </Row>
        // </Container>
    );
};

export default Home;
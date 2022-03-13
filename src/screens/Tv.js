import React, {useEffect, useState} from 'react';
import { Button, Container, Card, Col, Row} from 'react-bootstrap'
import axios from "axios";

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
        <Container>
            <Row>
                {tvs.map(tv => (
                    <Col className={'mt-2 m-1'} key={tv.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{tv.name.slice(0, 15)} ...</Card.Title>
                                <Card.Text>
                                    {tv.overview.slice(0, 50)} ...
                                </Card.Text>
                                <Button variant="primary">자세히 보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Tv;
import React from 'react';
import {Button, Card, Col} from "react-bootstrap";

const Poster = ({title, desc, poster}) => {
    return (
        <Col className={'mt-2 m-1'}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster}`} />
                <Card.Body>
                    <Card.Title>{title.slice(0, 15)} ...</Card.Title>
                    <Card.Text>
                        {desc.slice(0, 50)} ...
                    </Card.Text>
                    <Button variant="primary">자세히 보기</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Poster;
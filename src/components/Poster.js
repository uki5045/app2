import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Poster = ({title, desc, poster, to}) => {
    return (
        <Col className={'mt-2 m-1'}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={poster} />
                <Card.Body>
                    <Card.Title>{title.slice(0, 15)} ...</Card.Title>
                    <Card.Text>
                        {desc.slice(0, 50)} ...
                    </Card.Text>
                    <Link to={to}>
                        <Button variant="primary">자세히 보기</Button>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Poster;
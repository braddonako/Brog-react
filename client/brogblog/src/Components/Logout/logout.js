import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


const Logout = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src = "https://i.imgur.com/jq6UcwG.jpg slide&bg=373940"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Denver, CO</h3>
                <p>Cherry Creek Trail</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/F4cFWoJ.jpg slide&bg=282c34"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Golden, CO</h3>
                <p>Some trail by lookout mountain</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/7gDwSUf.jpg slide&bg=20232a"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Logout;
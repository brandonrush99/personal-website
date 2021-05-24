import Carousel from 'react-bootstrap/Carousel';
import React, {useState} from 'react';
import Friowatch from '../assets/FrioWatch.png';
import MovieApp from '../assets/MovieAppFavorite.JPG';
import PersonalWebsite from '../assets/PersonalWebsite.JPG';
import '../styles/personal.css';
import Button from 'react-bootstrap/Button';


function Personal() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        
        <div className="container">
            <h1><u>Personal Projects</u></h1>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                <Carousel.Item className="item">
                    <img
                        className='friowatch'
                        src={Friowatch}
                        alt="Frio Watch"
                    />
                    <Carousel.Caption className="caption">
                    <h3 className={'text'}>Frio Watch</h3>
                    <p className={'text'}>An ios app created using Expo and React Native. This app allows users to easily view
                        the current and historical discharge rates of the Frio River.
                    </p>
                    <Button variant="success" href="https://github.com/brandonrush99/frio-river-utility-app">View the GitHub</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="item">
                    <img
                        className='movieapp'
                        src={MovieApp}
                        alt="Movie App"
                    />
                    <Carousel.Caption className="caption">
                    <h3>MovieApp</h3>
                    <p>A simple web app created using Angular for the frontend and .Net E.F. Core for the backend. Allows
                    the user to search for movies and modify their own list of favorite movies.
                    </p>
                    <Button variant="success" href="https://github.com/brandonrush99/MovieApp">View the GitHub</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="item">
                    <img
                        className='personalwebsite'
                        src={PersonalWebsite}
                        alt="Personal Website"
                    />
                    <Carousel.Caption className="caption">
                    <h3>This website</h3>
                    <p>I created this website using React and several powerful React libraries such as React Bootstrap and Antd.</p>
                    <Button variant="success" href="https://github.com/brandonrush99/MovieApp">View the GitHub</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    );
}
export default Personal;
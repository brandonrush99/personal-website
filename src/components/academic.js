import Carousel from 'react-bootstrap/Carousel';
import React, {useState} from 'react';
import SmartSchedulerWeb from '../assets/SmartSchedulerWeb.JPG';
import SentimentAnalysis from '../assets/SentimentAnalysis.JPG';
import '../styles/academic.css';
import Button from 'react-bootstrap/Button';

function Academic() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        
        <div className="container">
            <h1><u>Academic Projects</u></h1>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                <Carousel.Item className="item">
                    <img
                        className='smartscheduler'
                        src={SmartSchedulerWeb}
                        alt="Smart Scheduler Web"
                    />
                    <Carousel.Caption className="caption">
                    <h3 className={'text'}>Smart Scheduler</h3>
                    <p className={'text'}>My senior capstone project, Smart Scheduler is a web/mobile application that allows students to
                    create class schedules automatically. The web app was created with React for the frontend and Django for the backend, while
                    the mobile app was created using Expo and React Native.
                    </p>
                    <Button variant="success" href="https://www.youtube.com/watch?v=kG7KXl6ewx4">Watch the demo video!</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="item">
                    <img
                        className='sentiment'
                        src={SentimentAnalysis}
                        alt="Sentiment Analysis"
                    />
                    <Carousel.Caption className="caption">
                    <h3>Twitter Sentiment Analysis</h3>
                    <p>A web application created with Flask that allows the user to input a keyword and a date, and the system 
                        will return the positivity level of the tweets about that keyword on a scale of -2 (very negative) to 2
                        (very positive).
                    </p>
                    </Carousel.Caption>
                    
                </Carousel.Item>
            </Carousel>
        </div>
        
    );
}
export default Academic;
import Carousel from 'react-bootstrap/Carousel';
import React, {useState} from 'react';
import Friowatch from '../assets/FrioWatch.JPG';
import AggieMomsApp from '../assets/AggieMomsOfTAMU.JPG';
import PersonalWebsite from '../assets/PersonalWebsite.JPG';
import '../styles/personal.css';
import Button from 'react-bootstrap/Button';


function Personal() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const carouselItems = [
        {
            className: 'aggiemomapp',
            src: AggieMomsApp,
            alt: "Aggie Moms of TAMU",
            description: "A mobile app created using Expo and React Native that was created for the Federation of Texas A&M University Mothers' Clubs. Allows Aggie moms from across the country to get involved in their local Texas A&M Mothers Club. Available on the IOS App Store / Google Play Store now!",
            githubLink: "https://github.com/brandonrush99/TAMU_Mothers_Club_App"
        },
        {
            className: 'friowatch',
            src: Friowatch,
            alt: "Frio Watch",
            description: "A mobile app created using Expo and React Native. This app allows users to easily view the current and historical discharge rates of the Frio River. Available on the IOS App Store / Google Play Store now!",
            githubLink: "https://github.com/brandonrush99/frio-river-utility-app"
        },
        
        {
            className: 'personalwebsite',
            src: PersonalWebsite,
            alt: "Personal Website",
            description: "I created this website using React and several powerful React libraries such as React Bootstrap and Antd.",
            githubLink: "https://github.com/brandonrush99/personal-website"
        }
    ];

    return (
        
        <div className="container">
            <h1><u>Personal Projects</u></h1>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                {carouselItems.map((item, key) => {
                    return (
                        <Carousel.Item className="item" key={key}>
                        <img
                            className={item.className}
                            src={item.src}
                            alt={item.alt}
                        />
                        <Carousel.Caption className="caption">
                        <h3 className={'text'}>{item.alt}</h3>
                        <p className={'text'}>{item.description}</p>
                        <Button variant="success" href="https://github.com/brandonrush99/frio-river-utility-app">View the GitHub</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                })

                }
            </Carousel>
        </div>
        
    );
}
export default Personal;
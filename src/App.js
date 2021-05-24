import headshot from './assets/HeadShot.jpg';
import './App.css';
import Image from 'react-bootstrap/Image';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <Fade cascade duration={2000} className="fade">
        <h1>Welcome</h1>
        <Image src={headshot} className="headshot" roundedCircle />
        <p>
          Howdy, my name is Brandon Rush, and welcome to my personal website. This is basically a living resume where I can go more in depth on my work experience and
          projects that I have worked on.
        </p>
        
      </Fade>
      <Fade cascade duration={2000}>
        <h1>A little about me</h1>
        <p>
          I am 22 years old from The Woodlands, Texas, and am currently a Technical Consultant at Machine Automation in Houston, Texas.
        </p>
      </Fade>
      <Fade cascade duration={2000}>
        <h1>Education</h1>
        <p>
          In May of 2021 I graduated Summa Cum Laude (4.97 GPA) from Texas A&#38;M with a B.S. in Computer Science and Engineering and minors in 
          Mathematics and Cybersecurity.
        </p> 
      </Fade>
      <Fade cascade duration={2000}>
        <h1>Personal Interests</h1>
        <p>
          Outside of work and personal programming projects, I love to play pretty much any sport you can think of. I also enjoy playing video games, spending time
          with friends and family, and playing guitar. I am also one of the biggest fightin' Texas Aggie Football fans you will find.
        </p> 
      </Fade>
      <Fade cascade duration={2000}>
        <h1>Future Career Goals</h1>
        <p>
          Every day I strive to improve my programming skills and become a better problem solver. It is my goal to become a full stack developer and tackle some of
          the world's toughest problems. 
        </p>  
      </Fade>
    </div>
  );
}

export default App;

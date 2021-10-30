import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/navbar.css';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';
import {Button} from 'antd';
import {LinkContainer} from 'react-router-bootstrap'

function NavigationBar() {
    return (
           <Navbar bg="light" variant="light" expand="lg" sticky="top">
            <LinkContainer to="/">
                <Navbar.Brand>Brandon Rush</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <LinkContainer to="/workexperience">
                    <Nav.Link>Work Experience</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/resume">
                    <Nav.Link>Resume</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                    <LinkContainer to="/personal">
                        <NavDropdown.Item>Personal</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/academic">
                        <NavDropdown.Item>Academic</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                <LinkContainer to="/privacypolicy">
                    <Nav.Link>Privacy Policies</Nav.Link>
                </LinkContainer>
                
                </Nav>
            </Navbar.Collapse>
            <Button 
                type="link" 
                className="mr-sm-2" 
                href="https://github.com/brandonrush99" 
                icon={<GithubFilled  style={{ fontSize: '25px' }} /> } 
            />
            <Button 
                type="link"
                className="mr-sm-2"
                href="https://www.linkedin.com/in/brandon-rush-272179180/" 
                icon={ <LinkedinFilled  style={{ fontSize: '25px' }}/> }
            />
        </Navbar> 
        
    );
}
export default NavigationBar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-scroll';
import navCSS from '../NavBar/NavBar.module.css'


function NavBar(){

    return(
        <>
          <Navbar fixed='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><strong>Leo Afonso</strong></Navbar.Brand>
                <Nav className="me-auto">
                    <Link className={navCSS.link} style={{fontSize: 'large'}} to="home" spy={true} smooth={true} offset={-100} duration={500}>Home &nbsp;&nbsp;</Link>
                    <Link className={navCSS.link} style={{fontSize: 'large'}} to="about" spy={true} smooth={true} offset={0} duration={500}>About &nbsp;&nbsp;</Link>
                    <Link className={navCSS.link} style={{fontSize: 'large'}} to="projects" spy={true} smooth={true} offset={-50} duration={500}>Projects &nbsp;&nbsp;</Link>
                    <Link className={navCSS.link} style={{fontSize: 'large'}} to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                </Nav>
            </Container>
          </Navbar>
        </>
    )
}

export default NavBar;
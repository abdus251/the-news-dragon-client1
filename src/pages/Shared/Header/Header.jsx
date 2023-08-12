import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container  className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'>
                <small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className="d-flex">
            <Button variant="danger">Latest</Button>
            <Marquee speed={60}>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.....
</Marquee>
            </div>
            <Navbar collapseOnSelect expand = "lg" bg="light" variant="light">
        <Container>
          
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            
            
            
            
            
            
          </Nav>
          <Button variant="secondary">Login</Button>{' '}
        </Container>
      </Navbar>
        </Container>
    );
};

export default Header;
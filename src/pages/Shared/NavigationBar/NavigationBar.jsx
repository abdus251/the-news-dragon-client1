import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const NavigationBar = () => {

    const { user } = useContext(AuthContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Nav className="mx-auto">
                        <Link to='/'>Home</Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>


                    </Nav>
                    {user &&
                        <FaUserCircle style={{ fontSize: '2rem' }}>
                        </FaUserCircle>
                    }

                    {user ? <Button variant="secondary">Logout</Button> :
                        <Link to="/login"><Button variant="secondary">Login</Button></Link>
                    }
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;
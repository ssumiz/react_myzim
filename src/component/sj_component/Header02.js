import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import menudata from '../../data/menu';
import h2 from '../../sass/sj/sj_h2.module.scss';

function Header02() {

    return (
        <Navbar expand="lg" className="border-bottom p-0 m-0">
            <Container className="justify-content-center">
                <Nav className="position-relative">
                    {menudata.map((e, i) => {
                        return (
                            <>
                                <Nav.Link href={e.href} className={h2.mainmenu}>{e.menu1}
                                    {e.isSub == 'true' &&
                                        <Nav className={`${h2.smenu} position-absolute d-none`}>
                                            {
                                                e.d2.map((el, idx) => {
                                                    return <Nav.Link href={el.href}>{el.name}</Nav.Link>
                                                })
                                            }
                                        </Nav>
                                    }
                                </Nav.Link>
                            </>
                        );
                    })}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header02;
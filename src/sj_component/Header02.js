import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import menudata from '../data/menu.json';
import h2 from '../sass/sj_h2.module.scss';

function Header02() {


  return (
    <Navbar expand="lg" className="border-bottom p-0 m-0 position-relative">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav" className={`${h2.all_nav} d-flex justify-content-center`}>
            {
                menudata.map((el,idx)=>{
                    return(
                        <Nav.Link href={el.href} className={h2.mainnav}>{el.menu1}
                        <Navbar className={`${h2.smenu} m-0 p-0`}>
                        {
                            el.d2.map((e,v)=>{
                              return(
                                <>
                                  <a key={v} href={e.href}>{e.name}</a>
                                </>
                              );
                            })
                        }
                        </Navbar>
                        </Nav.Link>
                    );
                })
            }
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header02;
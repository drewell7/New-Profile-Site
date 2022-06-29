import { Navbar, Container, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import { useState } from 'react';

function TopNavbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className='navbar'>
        <Container>
          <NavbarToggler className='me-2' onClick={() => { setIsOpen(!isOpen) }} />
          <Collapse isOpen={isOpen} navbar>       
            <Nav navbar>
              <NavItem>
                <NavLink>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse> 
        </Container>
      </Navbar>

  )
}

export default TopNavbar;

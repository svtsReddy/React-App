import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Home from './Home'

const links = [
  { href: '#home', text: 'HOME' },
  { href: '/Login', text: 'LOGIN' },
];

const createNavItem = ({ href, text, className }) => (
  <NavItem > 
    <NavLink href={href} className={className} >{text}</NavLink>
  </NavItem>
);

class Welcome extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar color="light" danger expand="md">
          <NavbarBrand href="/">Tambola</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
        <Home/>
      </div>
    );
    }
}
export default Welcome;
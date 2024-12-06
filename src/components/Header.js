import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
} from "reactstrap";

function Header() {
  return (
    <div className="shadow-md px-4 justify-center flex">
      <Navbar light expand="md" className=" w-75">
        <NavbarBrand href="/" className="text-primary font-bold text-4xl">
          E-Shop
        </NavbarBrand>

        {/* Search Bar */}
        <div className="relative w-50 h-12">
          <Input
            type="text"
            placeholder="Search for products..."
            className="rounded-l-md border-gray-300 focus:ring-primary focus:border-primary w-full h-full"
          />
          {/* <i className="absolute left-3 top-center top-3 text-gray-400 fas fa-search"></i> */}
        </div>

        {/* Navigation Links */}
        <Nav className=" flex items-center gap-4 text-primary" navbar>
          <NavItem>
            <NavLink href="/home" className=" text-xl hover:text-primary">
              <i class="fa fa-user-circle mr-2 " aria-hidden="true"></i>
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/home" className=" text-xl hover:text-primary">
              <i class="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
              Cart
            </NavLink>
          </NavItem>
        </Nav>

        {/* Cart Icon */}
        <div className="ml-4 flex items-center"></div>
      </Navbar>
    </div>
  );
}

export default Header;

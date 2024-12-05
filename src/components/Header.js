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
    <Navbar color="light" light expand="md" className="shadow-md px-4">
      {/* Logo */}
      <NavbarBrand href="/" className="text-primary font-bold text-xl">
        E-Shop
      </NavbarBrand>

      {/* Search Bar */}
      <div className="flex-grow mx-4 hidden md:flex items-center">
        <Input
          type="text"
          placeholder="Search for products..."
          className="rounded-l-md border-gray-300 focus:ring-primary focus:border-primary w-25"
        />
        <Button color="primary" className="rounded-r-md">
          Search
        </Button>
      </div>

      {/* Navigation Links */}
      <Nav className="ml-auto flex items-center gap-4" navbar>
        <NavItem>
          <NavLink href="/home" className="text-gray-700 hover:text-primary">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="/products"
            className="text-gray-700 hover:text-primary"
          >
            Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about" className="text-gray-700 hover:text-primary">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact" className="text-gray-700 hover:text-primary">
            Contact
          </NavLink>
        </NavItem>
      </Nav>

      {/* Cart Icon */}
      <div className="ml-4 flex items-center">
        <img
          src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png"
          alt="Cart"
          className="cursor-pointer hover:opacity-80"
        />
      </div>
    </Navbar>
  );
}

export default Header;

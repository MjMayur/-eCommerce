import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Input } from "reactstrap";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  // Check if the current route is '/login'
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="shadow-md px-4 justify-center flex">
      <Navbar light expand="md" className="w-75">
        <NavbarBrand href="/" className="text-primary font-bold text-4xl">
          E-Shop
        </NavbarBrand>

        {/* Conditionally render Search Bar */}
        {!isLoginPage && (
          <div className="relative w-50 h-12">
            <Input
              type="text"
              placeholder="Search for products..."
              className="rounded-l-md border-gray-300 focus:ring-primary focus:border-primary w-full h-full"
            />
          </div>
        )}

        {/* Navigation Links */}
        <Nav className="flex items-center gap-4 text-primary" navbar>
          <NavItem>
            <NavLink
              href={location.pathname === "/signup" ? "/login" : "/signup"}
              className="text-black text-xl hover:text-primary"
            >
              <i className="fa fa-user-circle mr-2" aria-hidden="true"></i>
              {location.pathname === "/signup" ? "Login" : "Register"}
            </NavLink>
          </NavItem>

          {/* Conditionally render Cart button */}
          {!isLoginPage ? (
            <NavItem>
              <NavLink
                href="/home"
                className="text-black text-xl hover:text-primary"
              >
                <i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
                Cart
              </NavLink>
            </NavItem>
          ) : (
            <NavItem>
              <NavLink
                href="/home"
                className="text-black text-xl hover:text-primary"
              >
                <i className="fa fa-home mr-2" aria-hidden="true"></i>
                Home
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;

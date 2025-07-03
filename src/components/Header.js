import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated auth state
  const [userName, setUserName] = useState("Alex Johnson"); // Simulated user data

  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/signup";

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="shadow-md bg-white sticky top-0 z-50">
      <Navbar light expand="md" className="container mx-auto py-2">
        {/* Brand */}
        <NavbarBrand
          onClick={() => navigate("/")}
          className="text-blue-600 font-bold text-2xl md:text-3xl cursor-pointer flex items-center"
        >
          <div className="bg-blue-600 w-8 h-8 rounded-md mr-2 flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          Shop
        </NavbarBrand>

        {/* Toggler for mobile */}
        <NavbarToggler onClick={toggle} className="focus:outline-none" />

        <Collapse isOpen={isOpen} navbar className="w-full">
          {/* Conditionally render search bar */}
          {!isLoginPage && (
            <div className="flex-grow mx-3 my-2 my-md-0 w-full max-w-lg">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for products, brands, and categories..."
                  className="rounded-full border-gray-300 w-full pl-5 pr-12 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          )}

          {/* Navigation Items */}
          <Nav className="ms-auto align-items-center gap-1 md:gap-3" navbar>
            {!isLoggedIn ? (
              <>
                <NavItem className="my-1 md:my-0">
                  <NavLink
                    onClick={() =>
                      navigate(
                        location.pathname === "/signup" ? "/login" : "/signup"
                      )
                    }
                    className="text-gray-700 hover:text-blue-600 cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <i
                      className={`fa ${
                        location.pathname === "/signup"
                          ? "fa-sign-in"
                          : "fa-user-plus"
                      } me-1`}
                    />
                    {location.pathname === "/signup" ? "Login" : "Register"}
                  </NavLink>
                </NavItem>

                <NavItem className="my-1 md:my-0">
                  <NavLink
                    onClick={() => navigate("/")}
                    className="text-gray-700 hover:text-blue-600 cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <i className="fa fa-home me-1" />
                    Home
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem className="hidden md:block my-1 md:my-0">
                  <NavLink
                    onClick={() => navigate("/wishlist")}
                    className="text-gray-700 hover:text-blue-600 cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <i className="fa fa-heart me-1" />
                    <span className="hidden lg:inline">Wishlist</span>
                  </NavLink>
                </NavItem>

                <NavItem className="my-1 md:my-0">
                  <NavLink
                    onClick={() => navigate("/cart")}
                    className="text-gray-700 hover:text-blue-600 cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors relative"
                  >
                    <i className="fa fa-shopping-cart me-1" />
                    <span className="hidden lg:inline">Cart</span>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      3
                    </span>
                  </NavLink>
                </NavItem>

                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggleDropdown}
                  className="my-1 md:my-0"
                >
                  <DropdownToggle
                    nav
                    className="text-gray-700 hover:text-blue-600 cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 flex items-center justify-center mr-2">
                        <i className="fa fa-user text-gray-500" />
                      </div>
                      <span className="hidden lg:inline">{userName}</span>
                      <i className="fa fa-caret-down ml-1 hidden lg:inline" />
                    </div>
                  </DropdownToggle>
                  <DropdownMenu end className="mt-2 shadow-lg rounded-lg">
                    <DropdownItem
                      onClick={() => navigate("/account")}
                      className="py-3 px-4 hover:bg-gray-100"
                    >
                      <i className="fa fa-user-circle mr-3 text-gray-600" />
                      My Account
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => navigate("/orders")}
                      className="py-3 px-4 hover:bg-gray-100"
                    >
                      <i className="fa fa-box mr-3 text-gray-600" />
                      My Orders
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => navigate("/settings")}
                      className="py-3 px-4 hover:bg-gray-100"
                    >
                      <i className="fa fa-cog mr-3 text-gray-600" />
                      Settings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      onClick={handleLogout}
                      className="py-3 px-4 hover:bg-gray-100 text-red-600"
                    >
                      <i className="fa fa-sign-out mr-3" />
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

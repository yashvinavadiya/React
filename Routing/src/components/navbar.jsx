import React from "react";
import { Outlet  } from "react-router";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from "flowbite-react"

function Component() {
  return (
    <>
    <Navbar fluid rounded  className="sh">
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="https://i.pinimg.com/736x/ab/45/51/ab4551ae1a25886a96554c1244be395c.jpg"
          className="ya  "
          alt="Flowbite React Logo"
        /> 
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span> */}
      </NavbarBrand>
      <div className=" ">
        {/* <Button>Get started</Button> */}
        {/* <NavbarToggle /> */}
      </div>
      <NavbarCollapse className="sh1">
        <NavbarLink href="/" >
          Home
        </NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/profile">Profile</NavbarLink>
         <NavbarLink href="/contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
     <main>
        <Outlet />
      </main>
      </>
  )
}
export default Component
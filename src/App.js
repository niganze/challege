import { useState } from "react"
import mobile from "./images/image-hero-mobile.png"
import desktop from "./images/image-hero-desktop.png"
import audiophile from "./images/client-audiophile.svg"
import databiz from "./images/client-databiz.svg"
import maker from "./images/client-maker.svg"
import meet from "./images/client-meet.svg"
import logo from "./images/logo.svg"
import chevronDown from "./images/icon-arrow-down.svg"
import chevronUp from "./images/icon-arrow-up.svg"
import menuOpen from "./images/icon-menu.svg"
import closeMenu from "./images/icon-close-menu.svg"
import todolist from "./images/icon-todo.svg"
import calendar from "./images/icon-calendar.svg"
import reminders from "./images/icon-reminders.svg"

import planning from "./images/icon-planning.svg"
import {createBrowserRouter ,createRoutesFromElements,Route,Link,Outlet, RouterProvider} from "react-router-dom"

import "./App.css"
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from "./pages/About"
// import Alain from "./pages/Alain"
import Careers from "./pages/Careers"
function App() {
  const [openFeatures, setOpenFeatures] = useState(false)
  const [openCompany, setOpenCompany] = useState(false)

  const handleOpenMenu = () => {
    const navbar = document.querySelector(".navbar")
    const menuButton = document.querySelector(".menu-button")
    navbar.classList.toggle("open")
    if (navbar.classList.contains("open")) {
      menuButton.src = closeMenu
    } else {
      menuButton.src = menuOpen
    }
  }
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route  path="/" element={<>
          <header className="p-5 flex items-center justify-between">
        <div className="lg:flex lg:items-start lg:justify-start">
          <img src={logo} alt="" className="lg:mr-5" />
          <nav className="navbar">
            <div>
              <button
                onClick={() => setOpenFeatures(!openFeatures)}
                className="flex items-center justify-start "

              >
                Features{" "}
                {openFeatures ? (
                  <img src={chevronUp} alt="" className="ml-2" />
                ) : (
                  <img src={chevronDown} alt="" className="ml-2" />
                )}
              </button>
              {openFeatures && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={todolist} alt="" className="mr-2" /> Todo List
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={calendar} alt="" className="mr-2" /> Calendar
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={reminders} alt="" className="mr-2" /> Reminders
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={planning} alt="" className="mr-2" /> Planning
                  </li>
                </ul>
              )}
            </div>

            <div>
              <button
                onClick={() => setOpenCompany(!openCompany)}
                className="flex items-center justify-start"
              >
                Company{" "}
                {openCompany ? (
                  <img src={chevronUp} alt="" className="ml-2" />
                ) : (
                  <img src={chevronDown} alt="" className="ml-2" />
                )}
              </button>
              {openCompany && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    History
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Our Team
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Blog
                  </li>
                </ul>
              )}
            </div>
            <div className="mb-2 lg:mb-0">
              <Link to="/Careers">
              <button>Careers</button>
              </Link>
              
            </div>
            <div>
              <Link to="/About">
              <button>About</button>
              </Link>
            </div>
             <div className="mb-2 lg:mb-0">
              {/* <Link to ="/Alain"> 
            <button>ALAIN</button>
            </Link> */}
            </div>
          </nav>
        </div>

        <div className="lg:hidden">
          <button onClick={handleOpenMenu}>
            <img src={menuOpen} alt="" className="menu-button" />
          </button>
        </div>

        <div className="hidden lg:block">
         <Link to="/login">
          <button className="mr-10 opacity-75">login</button>
          </Link>
          <Link to="/register">
          <button className="border-2 border-black opacity-75 px-6 py-2 rounded-2xl"><a href="">Register</a></button>
          </Link>
        </div>
      </header>
      <Outlet/>
       </>}>
        <Route index element={<Home/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/register" element={<Register/>} />
        <Route path="/About"  element={<About/>} />
        {/* <Route path="/Alain"  element={<Alain/>} /> */}
        <Route path="/Careers"  element={<Careers/>} />
      </Route>
    )
      
  )


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App




import { useState } from "react"
import mobile from "./images/image-hero-mobile.png"
import desktop from "./images/image-hero-desktop.png"
import audiophile from "./images/client-databiz.svg"
import databiz from "./images/client-audiophile.svg"
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

import './App.css';

function App() {
  const[openFeatures, setopenFeatures] = useState(false)
  const[openCompany, setopenCompany] = useState(false)
  const handledOpenMenu =() =>{
    const navbar = document.querySelector(".navbar")
    const menuButtom =document.querySelector(".menu-button")
    navbar.classList.toggle ("open")
    if (navbar.classList.contains("open")){
      menuButtom.src = closeMenu
    }else {
      menuButtom.src =menuOpen
    }
  }
  return ( 
  
    <>
   <header className="p-5 flex items-center justify-between ">
    <div className="flex">

    <div className="lg:flex lg:items-start lg:justify-start">
      <img src ={logo} alt="" className="lg:mr-5"/>
      </div>
      <div>
      <nav className="navbar open">
       <div>
        <button onClick={() => setopenFeatures(!openFeatures)}>
          Features {openFeatures? <img src={chevronUp} alt=""className="ml-2"/>:
          <img src={chevronDown}/>}</button>
        {openFeatures &&
         <ul className="mt-2 ml-3 lg:ml-0 p-3 lg:p-3 lg:shadow">
        <li className=""><img src={todolist} alt="mr-2"className=""/>Todo list</li>
        <li className=""><img src={calendar}alt="mr-2"className=""/>calender</li>
        <li className=""><img src={reminders}alt="mr-2"className=""/>reminders</li>
        <li className=""><img src={planning}alt="mr-2"className=""/>planning</li>
        </ul>}
       </div>

       <div>
        <button onClick={() => setopenCompany(!openCompany)}>Company
        {openCompany ? 
        <img src ={chevronUp}alt=""className=""/>:<img src={chevronDown}/>}
       </button>
       {openCompany&&
       <ul className="mt-2 ml-3 lg:ml-0 p-3 lg:p-3 lg:shadow">
        <li className="flex items-center justify-start text-sm mb-2">History</li>
        <li className="flex items-center justify-start text-sm mb-2">ourteam</li>
        <li className="flex items-center justify-start text-sm mb-2">blog</li>
        
        </ul>}
       </div>
       <div><button>Careers</button></div>
       <div><button>About</button></div>
      </nav>
    </div>
 
 <div className="hidden lg:block">
  <buttom onclick={handledOpenMenu}>
    <img src={menuOpen} alt=""
    className="menu-buttom"/>
  </buttom>
 </div>


 </div>

    <div className="">
      <button>Login</button>
      <button>sign up</button>
    </div>
   </header>









    <section className="container">
    <div className="text-container">
      <article className="text-center md:text-left">
      
        <h1 className="header">Make<br/> remote work</h1>
        
        <p>Get your team in sync, no matter your location. Streamline processes, 
                create team rituals, and watch productivity soar.</p>
                <button class="buttom">Learn more</button>
                <br/>
              
                <ul className="menu">
                  <li><img src={audiophile} alt=""/></li>
                  <li><img src={databiz} alt=""/></li>
                  <li><img src={maker} alt=""/></li>
                  <li><img src={meet} alt=""/></li>
                </ul>
      </article>
      </div>
      <div className="image-container">
      <picture>
        <source media="(min-width:500px)" srcSet={desktop} />
        <img src={mobile} alt=""/>
      </picture>
      </div>
    </section>
    
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from './NavBar.module.css';
import {RiMenuSearchLine} from "react-icons/ri";
import {IoMdClose} from "react-icons/io";
import { useScrollPosition } from '../Hooks/ScrollPosition';

const NavBar = () => {  
  const [NavBarOpen, setNavBarOpen]= useState(false)
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () =>{
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() =>{
    window.addEventListener("resize", detectDimension)
    windowDimension.width> 800 && setNavBarOpen(false)
    return () =>{
      /* eslint-disable no-restricted-globals */
      removeEventListener("resize", detectDimension)
      /* eslint-enable no-restricted-globals */

    }
  },[windowDimension])

  const links = [
    {
      id: 1,
      link: "Inicio",
    },
    {
      id: 2,
      link: "Tipos",
    },
    {
      id: 3,
      link: "Bocas",
    },
  ];
  
   const ScrollPosition = useScrollPosition();
  return (
    <div 
      className= {
        NavBarOpen 
        ? styles.NavOpen
        : ScrollPosition > 0
        ? styles.NavOnScroll
        : styles.NavBar
     }
    >
        {!NavBarOpen && <p className={styles.logo}>FIO | Drink Shots </p>}
        {!NavBarOpen && windowDimension.width < 800 ? (
         <RiMenuSearchLine
         color='black' 
         onClick={()=> setNavBarOpen(!NavBarOpen)} 
         size={25}
        />
        ) : (
          windowDimension.width < 800 && (
           <IoMdClose
              onClick={()=> setNavBarOpen(!NavBarOpen)} 
              color='black'
              size={25}
            />
         )
      )}
      {NavBarOpen  && (
        <ul className={styles.linksContainer}>
          {links.map((x)=> (
            <div>
              <Link
                onClick={()=> setNavBarOpen (false)}
                to= {x.link}
                smooth
                duration={500}
                className={styles.NavLink}
              >
                {x.link === "Contact" ? "Contact" : x.link}
              </Link>
              <div className={styles.border}></div>
           </div>
         ))}
        </ul>
      )}
      {windowDimension.width > 800 && (
        <ul className={styles.linksContainer}>
          {links.map((x)=> (
            <div>
              <Link
                onClick={()=> setNavBarOpen (false)}
                to= {x.link}
                smooth
                duration={500}
                className={styles.NavLink}
              >
                {x.link === "Contact" ? "Contact" : x.link}
              </Link>
              <div className={styles.border}></div>
           </div>
          ))}
            <Link
               onClick={()=> setNavBarOpen (false)}
                to="Contact"
                smooth
                duration={500}
                className={styles.ContactLink}
              >
                Contacto
              </Link>
         </ul>
      )}
    </div>
  );
};

export default NavBar;

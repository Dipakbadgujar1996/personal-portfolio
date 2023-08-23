import React from 'react'
import'./Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './Resume.pdf'
import {themeContext} from '../../Context';
import {useContext} from "react";
import {motion} from 'framer-motion';


const Services = () => {
const transition ={ duration:1, type:'spring'}
const theme =  useContext(themeContext);
const darkMode =theme.state.darkMode;


  return (
    <div className=" services" id='Services'>


    <div className="awesome"> 
    <span style={{color:darkMode? 'white':''}}>Awesome</span>
    <span>Services</span>
    <span>Lorem ipsum is simply dummy text of printing of printing lorem ipsum 
          
        <br />
        ipsum is dummy text to printing.
        </span>

        <a href={Resume} download >

        <button className="button s-button ">Download CV</button>
        </a>
        


        <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
    </div>
    <div className="cards">
        <motion.div
        whileInview={{left:'14rem'}}
        initial={{right :'25rem'}}
        
        transition={transition}
        
        
        style=  {{left: '14rem'}}>
            <Card   
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma, Sketch, Photoshop, Adobe "}
            
            />
        </motion.div>
        


        <div style={{top:"12rem",left:"-4rem"}}>
             <Card
             emoji={Glasses}
             heading={"Developer"}
             detail={"Html, Css, Javascript, React"}
             />
        </div>
        <div style={{top:"19rem",left:"12rem"}}>
            <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
                "UI/UX designer is responsible for a good design"
            }
            />
        </div>
    <div className="blur-s-blur2" style={{background:"var(--purple)"}}>
        
    </div>

    </div>
    </div>
  )
}

export default Services
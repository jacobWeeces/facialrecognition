import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0' style={{height: 150,width:150}}>
            <Tilt className="br2 shadow-2">
            <div className="Tilt-inner" style={{ height: 150, width: 150}}>
                <img style={{paddingTop: '30px'}} alt='logo image of brain' src={brain}/>
            </div>
            </Tilt>
        </div>
    );
}

export default Logo;
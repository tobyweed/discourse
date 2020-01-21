import React from 'react';
//import { render } from 'react-dom';
import './benefits.css';

const Benefit = ({ benefit }) => {
        return (
            <div class='bene'>
                <p> {benefit} </p>
            </div>
        )
}

export default Benefit;
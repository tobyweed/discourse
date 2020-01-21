import React from 'react';
//import { render } from 'react-dom';
import './background.css';

const BackgroundInformation = ({ bkgd }) => {
        return (
            <div class='bkgd'>
                <p> {bkgd} </p>
            </div>
        )
}

export default BackgroundInformation;
import React from 'react';
import { render } from 'react-dom';
import './proposition.css';

const Proposition = ({ prop }) => {
        return (
            <div class='prop'>
                <p> {prop} </p>
            </div>
        )
}

export default Proposition;
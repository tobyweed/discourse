import React, { Component } from 'react';
//import { render } from 'react-dom';
import './benefits.css';
import CreateBenefit from './createBenefit/createBenefit';

class Benefit extends Component{
    constructor(props) {
        super(props)
        
    }
    
    render() {
        return (
            <div className='benefits'>
                <div className='benefits__container'>
                </div>
                <div className='create-bene__container'>
                    <CreateBenefit />
                </div>
            </div> 
            
        )

    }
}

export default Benefit;
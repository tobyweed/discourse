import React, { Component } from 'react';
import { render } from 'react-dom';
import './createBenefits.css';

class CreateBenefit extends Component {
    constructor() {
        super();

        this.addBenefit = this.addBenefit.bind(this);
    }

    addBenefit() {
        fetch(`/args`)
            .then(response => response.json())
            .then(json => console.log(json.data[0].name))
        
        console.log("Success. Benefit added.");
    }
    render() {
        return (
            <div class='button__container'>
                <button className='create-benefit' onClick={this.addBenefit}> Create Benefit </button>
            </div>
        )
    }
};


export default CreateBenefit;
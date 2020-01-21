import React from 'react';
import { render } from 'react-dom'
import './navbar.css';

class NavigationBar extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul class='tabs'>
                        <li><a href="#">Proposition</a></li>
                        <li><a href="#">Issues</a></li>
                        <li><a href="#">Moderation</a></li>
                    </ul>
                </nav>
            </header>
            

        )
    }
}

export default NavigationBar;
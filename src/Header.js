import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                <p>{this.props.subTitle}</p>
            </header>
        )
    };
}

export default Header;

import React, {Component} from 'react';
import './style/Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <p>{this.props.footer}</p>
            </footer>
        )
    };
}

export default Footer;

import React, {Component} from 'react';
import './style/Menu.css';

class Menu extends Component {
    render() {
        const menuItems = this.props.sectionsName.map(item => {
            return (
                <li key={item}><a href={"#" + item}>{item}</a></li>
            )
        });

        return (
            <nav>
                <ol>
                    {menuItems}
                </ol>
            </nav>
        )
    };
}

export default Menu;

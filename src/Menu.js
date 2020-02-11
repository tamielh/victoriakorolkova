import React, {Component} from 'react';
import './style/Menu.css';

class Menu extends Component {
    render() {
        const { sectionsName } = this.props;
        const menuItems = sectionsName.map(section => {
            return (
                <li key={section}><a href={"#" + section}>{section}</a></li>
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

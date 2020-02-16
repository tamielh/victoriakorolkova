import React, {Component} from 'react';
import './style/Menu.css';

class Menu extends Component {
    render() {
        const { sections } = this.props;
        const menuItems = sections.map(categoryName => {
            return (
                <li key={categoryName.name}><a href={"#" + categoryName.name}>{categoryName.name}</a></li>
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

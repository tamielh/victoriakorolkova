import React, {Component} from 'react';
import './style/Menu.css';

class Menu extends Component {
    render() {
        const { sectionsName } = this.props;
        const menuItems = sectionsName.map(sectionName => {
            return (
                <li key={sectionName}><a href={"#" + sectionName}>{sectionName}</a></li>
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

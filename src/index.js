import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import inputData from "./data";
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";

const sectionsType = {
    IMAGE: 'image',
    VIDEO: 'video'
}

const properties = {
    title: "Victoria Korolkova",
    subTitle: "Je suis une super artiste",
    sectionsName: ["Mes réalisations", "Musée imaginaire", "Video", "Contact"],
    footer: "Made by Thibaud Amielh, 2020",
};

class App extends Component {
    render() {
        return (
            <div className="content-site">
                <Header
                    title={properties.title}
                    subTitle={properties.subTitle}
                />
                <Menu
                    sectionsName={properties.sectionsName}
                />
                <Content
                    sectionsName={properties.sectionsName}
                    inputData={inputData}
                />
                <Footer
                    footer={properties.footer}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

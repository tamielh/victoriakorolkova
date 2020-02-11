import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import inputData from "./data";
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";

const properties = {
    title: "Victoria Korolkova",
    subTitle: "Je suis une super artiste",
    sectionsName: ["Mes réalisations", "Musée imaginaire", "Video", "Contact"],
    /*sectionsName: [
        {name: "Mes réalisations", type: "gallery"},
        {name: "Musée imaginaire", type: "gallery"},
        {name: "Vidéo", type: "video"},
        {name: "Contact", type: "contact"},
    ],*/
    footer: "Made by Thibaud Amielh, 2020",
};

const sections = [
    {name: "Mes réalisations", type: "gallery"},
    {name: "Musée imaginaire", type: "gallery"},
    {name: "Vidéo", type: "video"},
    {name: "Contact", type: "contact"},
];


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
                    sectionsNames={sections}
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

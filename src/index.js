import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import inputData from "./inputData";
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";

const properties = {
    title: "Victoria Korolkova",
    subTitle: "Je suis une super artiste",
    sectionsName: ["Mes réalisations", "Musée imaginaire", /*"Video",*/ "Contact"],
    footer: "Made by Thibaud Amielh, 2020",
    url: "vkorolkova.art"
};

const sections = [
    {name: "Collages", type: "gallery", key: "collage"},
    {name: "Croquis", type: "gallery", key: "croquis_t1"}, //TODO - ajouter les t2 et t3
    {name: "Dessins", type: "gallery", key: "dessin"},
    {name: "Musée imaginaire", type: "gallery", key: "museum"},
    //{name: "Vidéo", type: "video"},
    {name: "Contact", type: "contact", key: null}
];

function getInputData() {
    return Object.entries(inputData);
}

function getCategoriesName() {
    let array = getInputData().map(line => line[1].category);
    array.splice(0, array.length, ...(new Set(array)));
    //console.log(array);
    return array;
}

class App extends Component {
    render() {
        const categoriesName = getCategoriesName();
        return (
            <div className="content-site">
                <Header
                    title={properties.title}
                    subTitle={properties.subTitle}
                />
                <Menu
                    sections={sections}
                />
                <Content
                    properties={properties}
                    sections={sections}
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

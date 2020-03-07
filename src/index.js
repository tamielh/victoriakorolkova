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
    subTitle: "",
    sectionsName: ["Mes réalisations", "Musée imaginaire", /*"Video",*/ "Contact"],
    footer: "Thibaud Amielh, 2020",
    url: "vkorolkova.art"
};

const sections = [
    {name: "Collages", type: "gallery", key: ["collage"]},
    {name: "Dessins", type: "gallery", key: ["dessin"]},
    {name: "Croquis", type: "gallery", key: ["croquis_t1", "croquis_t2", "croquis_t3"]},
    {name: "Musée imaginaire", type: "gallery", key: ["museum"]},
    //{name: "Vidéo", type: ["video"]}, TODO on hold
    {name: "Contact", type: "contact", key: [null]}
];

function getImagesData () {
    const imagesData = Object.entries(inputData).map(line => line[1]);
    return imagesData.map((imageData, index) => ({ id: index, ...imageData }));
}

class App extends Component {
    render() {
        return (
            <div className="content-site">
                <Header
                    title={properties.title}
                    subTitle={properties.subTitle}
                />
                <Menu
                    sectionsName={sections.map(section => section.name)}
                />
                <Content
                    properties={properties}
                    sections={sections}
                    imagesData={getImagesData()}
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

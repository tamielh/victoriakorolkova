import React, {Component} from 'react';
import Gallery from './Gallery';
import './style/Content.css';

class Content extends Component {
    renderImages(inputData) {
        return (
            <Gallery
                inputData={inputData}
                imagesId={[1,2,3,4,5,6,7,8,9,10,11,12]}
            />
           )
    }

    renderVideo() {
        return (
            <div className="video-container">
                <iframe src='https://www.youtube.com/embed/Rxr97xY3lJk'
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                />
            </div>
        );
    }

    renderContact() {
        return (
            <div className="contact-container">
                <p>CONTACT</p>
            </div>
        );
    }

    filterByCategory(inputData, category) {
        return inputData.filter(inputData => inputData.category === category);
    }

    render() {
        const sectionsNames = this.props.sectionsName;
        const inputData = this.props.inputData;

        const sections = sectionsNames.map(sectionName => {
            let content;

            switch (sectionName.toLowerCase()) {
                case "video":
                    content = this.renderVideo();
                    break;
                case "contact":
                    content = this.renderContact();
                    break;
                default:
                    content = this.renderImages(this.filterByCategory(inputData, sectionName.toLowerCase()));
            }

            return (
                <section key={sectionName} id={sectionName}>
                    <h1>{sectionName}</h1>
                    {content}
                </section>
            )
        });

        return (
            <main>
                {sections}
            </main>
        )
    };
}

export default Content;

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

    getDataByCategory(itemsData, category) {
        const result = itemsData.filter(itemsData => category === itemsData.category);

        console.log(result);
        return result;
    }

    render() {
        const { sections, inputData, itemsData } = this.props;

        const sectionsContent = sections.map(sectionName => {
            let content;

            switch (sectionName.type) {
                case "video":
                    content = this.renderVideo();
                    break;
                case "contact":
                    content = this.renderContact();
                    break;
                case "gallery":
                    content = this.renderImages(this.getDataByCategory(itemsData, sectionName.key));
            }

            return (
                <section key={sectionName.name} id={sectionName.name}>
                    <h1>{sectionName.name}</h1>
                    {content}
                </section>
            )
        });

        return (
            <main>
                {sectionsContent}
            </main>
        )
    };
}

export default Content;

import React from 'react';
import Gallery from './Gallery';
import './style/Content.css';

class Content extends React.Component {
    renderGallery(imagesData, hasNextSubCategory) {
        return (
            <Gallery
                inputData={imagesData}
                hasNextSubCategory={hasNextSubCategory}
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
        return itemsData.filter(itemsData => itemsData.category === category);
    }

    render() {
        const { sections, imagesData } = this.props;

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
                    content = sectionName.key.map((key, index) =>
                        this.renderGallery(
                            this.getDataByCategory(imagesData, key),
                            index !== (sectionName.key.length - 1)
                        ));
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

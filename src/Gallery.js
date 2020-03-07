import React from 'react';
import './style/Gallery.css';
import GalleryModal from "./GalleryModal";

const siteUrl = "https://tamielh.github.io/victoriakorolkova/";

function getImageSrc(id) {
    return siteUrl + "img/" + id + ".jpg";
}

function getImageDataById(imagesData, id) {
    if(id === null) return null;
    return imagesData[imagesData.findIndex(imageData => imageData.id === id)];
}

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentIndex: null};
        this.closeModal = this.closeModal.bind(this);
        this.findNext = this.findNext.bind(this);
        this.findPrev = this.findPrev.bind(this);
        this.renderImageContent = this.renderImageContent.bind(this);
    }

    renderImageContent(src, id) {
        return (
            <div onClick={(e) => this.openModal(e, id)} key={id}>
                <img src={src} key={id} alt="" />
            </div>
        )
    }
    openModal(e, id) {
        this.setState ({ currentIndex: id }, function () {
            console.log("current index" + this.state.currentIndex);
        });
    }
    closeModal(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        this.setState ({ currentIndex: null });
    }
    findPrev(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        if(this.state.currentIndex != null) {
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex - 1
            }));
        }
    }
    findNext(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        if(this.state.currentIndex != null) {
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex + 1
            }));
        }
    }
    render() {
        const { inputData, hasNextSubCategory } = this.props;

        const imagesData = inputData.map(imageData => ({
                ...imageData,
                src: getImageSrc(imageData.image_name)
        }));

        const separator = hasNextSubCategory ? (<hr className="separator" />) : ("");

        return (
            <div className="gallery-container">
                <div className="gallery-grid">
                    {imagesData.map(image => this.renderImageContent(image.src, image.id))}
                </div>
                {separator}
                <GalleryModal
                    closeModal={this.closeModal}
                    findPrev={this.findPrev}
                    findNext={this.findNext}
                    hasPrev={this.state.currentIndex > imagesData[0].id}
                    hasNext={this.state.currentIndex + 1 < imagesData[imagesData.length - 1].id}
                    imageData={getImageDataById(imagesData, this.state.currentIndex)}
                />
            </div>
        )
    }
}

export default Gallery;

import React, {Component} from 'react';
import './style/Gallery.css';
import GalleryModal from "./GalleryModal";

const siteUrl = "https://tamielh.github.io/victoriakorolkova/";

function getImageSrc(id) {
    return siteUrl + "img/" + id + ".jpg";
}

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {currentIndex: null};
        this.closeModal = this.closeModal.bind(this);
        this.findNext = this.findNext.bind(this);
        this.findPrev = this.findPrev.bind(this);
        this.renderImageContent = this.renderImageContent.bind(this);
        /*this.inputData = this.props.inputData;*/
    }
    renderImageContent(src, index, description) {
        //console.log("index: " + index);
        return (
            <div key={index} onClick={(e) => this.openModal(e, index)}>
                <img src={src} key={src} alt="" />
                <p>{index}</p>
            </div>
        )
    }
    openModal(e, index) {
        this.setState ({ currentIndex: index });
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
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    }
    findNext(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }
    render() {
        const { inputData, imagesId } = this.props;
        const imagesData = inputData.map(item => ({src: getImageSrc(item.image_name), description: item.description}));

        return (
            <div className="gallery-container">
                <div className="gallery-grid">
                    {imagesData.map((item, index) => this.renderImageContent(item.src, index, item.description))}
                </div>
                <GalleryModal
                    closeModal={this.closeModal}
                    findPrev={this.findPrev}
                    findNext={this.findNext}
                    hasPrev={this.state.currentIndex > 0}
                    hasNext={this.state.currentIndex + 1 < imagesData.length}  /* TODO - Unsafe ! */
                    src={this.state.currentIndex !== null ? imagesData[this.state.currentIndex].src : null}
                />
            </div>
        )
    }
}

export default Gallery;

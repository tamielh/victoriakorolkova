import React, {Component} from 'react';
import './style/GalleryModal.css';

class GalleryModal extends Component {
    constructor() {
        super();
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        //document.body.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        //document.body.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e) {
        /*if (e.keyCode === 27)
            this.props.closeModal();
        if (e.keyCode === 37 && this.props.hasPrev) {
            console.log("To the left");
            this.props.findPrev();
        }
        if (e.keyCode === 39 && this.props.hasNext) {
            console.log("To the right");
            this.props.findNext();
        }*/
    }
    renderDescription(imageData) {
        const author = imageData.author;
        let date = imageData.date;
        date = author ? " " + date : date;
        const renderAuthorAndDate = author || date ? (<p className="author-date">{author}{date}&nbsp;</p>) : null;
        return (
            <div className="modal-legend">
                {renderAuthorAndDate}
                <p>{imageData.description}</p>
            </div>
        )
    }
    render () {
        const { closeModal, hasNext, hasPrev, findNext, findPrev, imageData } = this.props;
        if (!imageData) {
            console.log('whut');
            return null;
        }
        //console.log("src: " + src);
        return (
            <div>
                <div className="modal-overlay" onClick={closeModal}/>
                <div className="modal">
                    <div className='modal-body'>
                        <a href="#" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
                        {hasPrev && <a href="#" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
                        {hasNext && <a href="#" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
                        <img src={imageData.src} alt={""} />
                    </div>
                    {this.renderDescription(imageData)}
                </div>
            </div>
        )
    }
}

export default GalleryModal;

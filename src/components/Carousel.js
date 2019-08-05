import React from "react";

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImage: 0
        };

        this.previousImage = this.previousImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.closeCarousel = this.closeCarousel.bind(this);
    }

    nextImage() {
        if (this.state.currentImage < this.props.allImages.length - 1) {
            this.setState({
                currentImage: this.state.currentImage + 1
            });
        } else {
            this.setState({
                currentImage: 0
            });
        }
    }

    previousImage() {
        if (this.state.currentImage === 0) {
            this.setState({
                currentImage: this.props.allImages.length - 1
            });
        } else {
            this.setState({
                currentImage: this.state.currentImage - 1
            });
        }
    }

    closeCarousel() {
        this.setState({
            currentImage: 0
        });
        this.props.reset();
    }

    setByIndex(index) {
        this.setState({
            currentImage: index
        });
    }

    render() {
        let carouselIndex = this.props.allImages.map((image, index) => {
            return <span className="carousel__image-index" index={index} onClick={() => this.setByIndex(index)} style={{backgroundColor: this.state.currentImage === index ? "#fff" : "transparent"}} />;
        });

        return (
            <div className="carousel" aria-roledescription="carousel" aria-label="carousel of images for clicked product" aria-modal={this.props.ariaModal}>
                <div className="carousel__container">
                    <img className="carousel__image" src={this.props.allImages[this.state.currentImage].href} alt={this.props.allImages[this.state.currentImage].rel} />
                    <span className="carousel__left-arrow" onClick={this.previousImage}>
                        <div className="left-arrow-1" />
                        <div className="left-arrow-2" />
                    </span>
                    <span className="carousel__right-arrow" onClick={this.nextImage}>
                        <div className="right-arrow-1" />
                        <div className="right-arrow-2" />
                    </span>
                    <span className="carousel__close" onClick={this.closeCarousel}>
                        <div className="close-arrow-1" />
                        <div className="close-arrow-2" />
                    </span>
                    <div className="carousel__nav">{carouselIndex}</div>
                </div>
            </div>
        );
    }
}

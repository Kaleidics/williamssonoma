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
        console.log(this.props);
        this.props.reset();
    }

    setByIndex(index) {
        console.log(index);
        this.setState({
            currentImage: index
        });
    }

    render() {
        console.log(this.state.currentImage);
        let carouselIndex = this.props.allImages.map((image, index) => {
            return <span className="carousel__image-index" index={index} onClick={() => this.setByIndex(index)} style={{backgroundColor: this.state.currentImage === index ? "#fff" : "transparent"}} />;
        });

        return (
            <div className="carousel">
                <div className="carousel__container">
                    <img className="carousel__image" src={this.props.allImages[this.state.currentImage].href} alt={this.props.allImages[this.state.currentImage].rel} />
                    <span className="carousel__left-arrow" onClick={this.previousImage} />
                    <span className="carousel__right-arrow" onClick={this.nextImage} />
                    <span className="carousel__close" onClick={this.closeCarousel}>
                        close
                    </span>
                    <div className="carousel__nav">{carouselIndex}</div>
                </div>
            </div>
        );
    }
}

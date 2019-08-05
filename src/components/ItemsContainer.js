import React from 'react';
import Item from './Item';
import Carousel from './Carousel';

export default class ItemsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleCarousel: false,
            carouselImages: []
        }

        this.toggleClick = this.toggleClick.bind(this);
        this.reset = this.reset.bind(this);
    }

    toggleClick(images) {
        this.setState({
            toggleCarousel: true,
            carouselImages: images
        });
    }

    reset() {
        this.setState({
            toggleCarousel: false
        });
    }

    render() {

        let carousel = this.state.toggleCarousel ? <Carousel allImages={this.state.carouselImages} reset={this.reset} ariaModal={this.state.toggleCarousel}/> : "";

        //build a list of cards from the provided seed data
        let itemsList;
        itemsList = this.props.data.map( (item, index) => {
            return <Item data={item} key={index} style={{ animationDelay: `${index / 10}s` }} toggleClick={this.toggleClick} reset={this.reset} />
        });

        return <div className="items-container">{itemsList}{carousel}</div>;
    }
}

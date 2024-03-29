import React from "react";
import newcore from "../assets/newcore.png";
import fairTrade from "../assets/fairTrade.png";
import organic from "../assets/organic.png";
import handmade from "../assets/handmade.png";

export default class Item extends React.Component {
    render() {
        //some icons based on the flag rank from the provided data
        const flagIcons = {
            3: newcore,
            7: organic,
            8: handmade,
            9: fairTrade
        };

        //build a list of product messages from the provided data
        let item = this.props.data;
        let messages = item.messages.map((message, index) => {
            return (
                <li className="product__specifications" key={index}>
                    <p className="product__message">{message}</p>
                </li>
            );
        });

        //build a list of flags/icons from the provided data
        let flags = item.flags.map((flags, index) => {
            return (
                <li className="product__specifications u-spaceby-33" key={index}>
                    <img className="product__icon" src={flagIcons[`${flags.rank}`]} alt={flags.id} />
                    <p className="product__flag">{flags.id}</p>
                </li>
            );
        });

        //the actual card for each product
        return (
            <>
                <div id={item.id} className="product" style={this.props.style} tabIndex="0" onClick={() => this.props.toggleClick(item.images)}>
                    <div className="product__hero">
                        <img className="product__image" src={item.hero.href} alt={item.name} />
                        <p className="product__name-overlay">{item.name}</p>
                        <p className="product__price-overlay">${item.priceRange.selling.high}</p>
                    </div>
                    <div className="product__details">
                        <ul className="product__details-list">
                            <li className="product__specifications">
                                <p className="product__name">{item.name}</p>
                            </li>
                            <li className="product__specifications">
                                <ul className="product__flag-container">{flags}</ul>
                            </li>
                            <li className="product__flag-container">
                                <ul className="product__messages-container">{messages}</ul>
                            </li>
                            <li className="product__specifications">
                                <p className="product__price-range">
                                    Price: ${item.priceRange.selling.low} - ${item.priceRange.selling.high}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

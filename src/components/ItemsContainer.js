import React from 'react';
import Item from './Item';

export default class ItemsContainer extends React.Component {

    render() {
        
        //build a list of cards from the provided seed data
        let itemsList;
        itemsList = this.props.data.map( (item, index) => {
            return <Item data={item} key={index} style={{ animationDelay: `${index / 10}s` }} tab={index}/>
        });

        return <div className="items-container">{itemsList}</div>;
    }
}
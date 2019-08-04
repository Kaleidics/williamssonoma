import React from 'react';
import Item from './Item';

export default class ItemsContainer extends React.Component {

    render() {
        let itemsList = this.props.data.map( (item, index) => {
            return <Item data={item} key={index} style={{ animationDelay: `${index / 10}s` }}/>
        });

        return <div className="items-container">{itemsList}</div>;
    }
}
import React from 'react';
import Item from './Item';

export default class ItemsContainer extends React.Component {

    render() {
        let itemsList = this.props.data.map( (item, key) => {
            return <Item data={item} key={key} />
        });

        return <div>{itemsList}</div>;
    }
}
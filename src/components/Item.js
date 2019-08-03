import React from 'react';

export default class Item extends React.Component {
    render() {

        let item = this.props.data;
        return (
            <div>
                <div><img src={item.hero.href} alt={item.name}/></div>
            </div>
        )
    }
}
import React from 'react';
import { shallow, mount } from 'enzyme';
import newcore from "../assets/newcore.png"
import fairTrade from "../assets/fairTrade.png";
import organic from "../assets/organic.png";
import handmade from "../assets/handmade.png";

import Item from '../components/Item';

const ItemProps = {
    messages: ["Free Shipping with Code YESPLEASE"],
    flags: [{ rank: 3, id: "newcore" }, { rank: 7, id: "organic" }, { rank: 9, id: "fairtrade" }],
    hero: { href: "https://www.westelm.com/weimgs/ab/images/wcm/products/201924/0026/cotton-cloud-jersey-duvet-cover-shams-m.jpg" },
    name: "Cotton Cloud Jersey Duvet Cover + Shams - Light Heather Gray",
    style: "animationDelay: 1s",
    tab: "1",
    priceRange: {
        selling: {
            high: 199, 
            low: 34
        }
    }
};

const flagIcons = {
    3: newcore,
    7: organic,
    8: handmade,
    9: fairTrade
};

describe('<Item />', () => {
    it('Renders without crashing', () => {
        shallow(<Item {...ItemProps} />)
    });
});
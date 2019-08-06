import React from "react";
import { shallow, mount } from "enzyme";

import Item from "../components/Item";

const ItemProps = {
    data: {
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
    }
};

const ImageProps = {
    allImages: [
        {
            href: "https://www.westelm.com/weimgs/ab/images/wcm/products/201924/0023/cotton-cloud-jersey-duvet-cover-shams-m.jpg",
            rel: "althero"
        },
        {
            href: "https://www.westelm.com/weimgs/ab/images/wcm/products/201924/0034/cotton-cloud-jersey-duvet-cover-shams-medium-heather-gray-1-m.jpg",
            rel: "althero"
        },
        {
            href: "https://www.westelm.com/weimgs/ab/images/wcm/products/201926/0014/speckled-throws-1-m.jpg",
            rel: "althero"
        }
    ]
};

describe("<Item />", () => {

    it("Renders without crashing and receives props", () => {
        shallow(<Item {...ItemProps} />);
    });

    it("Renders the hero image", () => {
        const hero = "https://www.westelm.com/weimgs/ab/images/wcm/products/201924/0026/cotton-cloud-jersey-duvet-cover-shams-m.jpg";
        const alt = "Cotton Cloud Jersey Duvet Cover + Shams - Light Heather Gray";
        const wrapper = shallow(<Item {...ItemProps} />);
        expect(wrapper.contains(<img className="product__image" src={hero} alt={alt} />)).toEqual(true);
    });

    it("Renders the name overlay", () => {
        const nameOverlay = "Cotton Cloud Jersey Duvet Cover + Shams - Light Heather Gray";
        const wrapper = shallow(<Item {...ItemProps} />);
        expect(wrapper.contains(<p className="product__name-overlay">{nameOverlay}</p>)).toEqual(true);
    });

    it("Renders the price overlay", () => {
        const priceOverlay = 199;
        const wrapper = shallow(<Item {...ItemProps} />);
        expect(wrapper.contains(<p className="product__price-overlay">${priceOverlay}</p>)).toEqual(true);
    });

    it("Renders the name", () => {
        const name = "Cotton Cloud Jersey Duvet Cover + Shams - Light Heather Gray";
        const wrapper = shallow(<Item {...ItemProps} />);
        expect(wrapper.contains(<p className="product__name">{name}</p>)).toEqual(true);
    });
});

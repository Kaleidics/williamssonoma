import React from "react";
import { shallow } from "enzyme";

import ItemsContainer from '../components/ItemsContainer';

const ItemProps = {
    data: [
            {
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
            },
            {
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
            },
        ]
};

describe("<ItemsContainer />", () => {
    it("Renders without crashing and receives props", () => {
        shallow(<ItemsContainer {...ItemProps} />);
    });
});
import React from "react";
import { shallow } from "enzyme";

import Carousel from "../components/Carousel";

const CarouselProps = {
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

describe("<Carousel />", () => {
    it("renders without crashing and receives props", () => {
        shallow(<Carousel {...CarouselProps} />);
    });
});

import { render } from '@testing-library/react';
import { ProductCard } from "../../index";

describe('<ProductCard />', () => {
    const props = {
        product: {
            "id": 1,
            "name": "Iphone 11 Kılıf",
            "imageName": "sample-product-3.png",
            "category": "Telefon Aksesuar",
            "brand": "Apple",
            "color": "Kırmızı",
            "stockCount": 4,
            "inBasket": false,
            "createdAt": "2022-01-01T10:30:00",
            "amount": {
                "currency": "TL",
                "original": 240,
                "discounted": 216,
                "discountRatePercentage": 10
            }
        }
    };

    const setup = (props) => {
        const utils = render(ProductCard(props));
        return {...utils};
    };

    it('renders correctly', () => {
        const {asFragment} = setup(props);
        expect(asFragment()).toMatchSnapshot();
    });
});

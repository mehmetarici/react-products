import React from 'react';
import { render } from '@testing-library/react';
import FilterSidebar from "../FilterSidebar";

describe('<FilterSidebar />', () => {
    const mockSortProducts = jest.fn();
    const mockFilterColorProducts = jest.fn();
    const mockFilterBrandProducts = jest.fn();

    const props = {
        filter: {
            colors: ["Beyaz", "Siyah", "Beyaz", "Mavi"],
            brands: ["Apple", "Apple", "Samsung"]
        },
        _sortProducts: mockSortProducts,
        _filterColorProducts: mockFilterColorProducts,
        _filterBrandProducts: mockFilterBrandProducts

    };

    const setup = (props) => {
        const utils = render(<FilterSidebar { ...props } />);
        return {...utils};
    };

    it('renders correctly', () => {
        const {asFragment} = setup(props);
        expect(asFragment()).toMatchSnapshot();
    });
});

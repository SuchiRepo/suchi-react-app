// import { render, screen } from '@testing-library/react';
// import App from './App';
//
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    it('should render a <div />', () => {
        // const wrapper = shallow(<App />);
        expect(wrapper.find('div').length).toEqual(1);
        expect(wrapper.find('div').length).toBeTruthy
    });
    // it('should render correctly', () => expect(wrapper).toMatchSnapshot());

});
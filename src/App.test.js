// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'; 
import Toc from './containers/Toc/Toc';

configure({adapter: new Adapter()});

describe('<Comment />', () => {
    it('should renter one Comment Item ', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Toc)).toHaveLength(1);
    });
});

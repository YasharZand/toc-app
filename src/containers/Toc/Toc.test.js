import React, {Component} from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Toc from './Toc';
import Comment from '../../components/Comment/Comment';

configure({ adapter: new Adapter() });

describe('<Toc />', () => {

   

    it('should renter ten Comment Item ', () => {
        const wrapper = shallow(<Toc />);
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'listHandler');
    wrapper.find('commentlist').simulate('scroll')
    expect(spy).toHaveBeenCalledTimes(1)
    });
});
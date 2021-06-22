import React from 'react'; 
import { configure, shallow, mount, render} from 'enzyme';
import chai from 'chai';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';
import Nav from './Nav'
import List from './List'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

configure({adapter: new Adapter()});
chai.use(chaiEnzyme());
React.useLayoutEffect = React.useEffect;
describe('Client', () => {
    let store;
    const middlewares = [];
    const mockStore = configureStore(middlewares);

describe('<Home/>', () => {
    let wrapper;
    beforeEach(() => {
      wrapper =  shallow(<Home />)
    })
    it('should be render the <Nav/> component', () => {
        expect(wrapper.find(Nav)).toHaveLength(1)
        })
    it('should be render the <List/> component', () => {
        expect(wrapper.find(List)).toHaveLength(1)
        })
    it('has a link to the recipeDetail component', () => {        
        expect(wrapper.find(Link)).to.have.lengthOf(1);
    
})
})
})
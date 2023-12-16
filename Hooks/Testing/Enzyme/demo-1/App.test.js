import { shallow } from 'enzyme'; // 3.11.0

import App from './App';
import CakesList from './components/CakesList';

describe('App Component', () => {
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it('Should render CakesList component', () => {
    appWrapper.find(CakesList);
  });

  it('Should render CakesList component only once', () => {
    const cakesList = appWrapper.find(CakesList);

    expect(cakesList).toHaveLength(1);
  });
});

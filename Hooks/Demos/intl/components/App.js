import { FormattedMessage } from 'react-intl'; // 5.20.9

import Header from './Header';
import Form from './Form';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />

      <div className='App-form'>
        <h1>
          <FormattedMessage id='hello' />
        </h1>
        <Form />
      </div>

      <Footer />
    </div>
  );
}

export default App;

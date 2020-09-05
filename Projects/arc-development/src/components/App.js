import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={() => <div>Home</div>} />
          <Route
            exact
            path="/customsoftware"
            component={() => <div>Home</div>}
          />
          <Route exact path="/mobileapps" component={() => <div>Home</div>} />
          <Route exact path="/websites" component={() => <div>Home</div>} />
          <Route exact path="/revolution" component={() => <div>Home</div>} />
          <Route exact path="/about" component={() => <div>Home</div>} />
          <Route exact path="/contact" component={() => <div>Home</div>} />
          <Route exact path="/estimate" component={() => <div>Home</div>} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import Header from './ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
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
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

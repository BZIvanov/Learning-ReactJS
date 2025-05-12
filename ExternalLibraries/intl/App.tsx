import { FormattedMessage } from "react-intl";

import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />

      <div className="App-form">
        <h1>
          <FormattedMessage id="introText" />
        </h1>
        <Form />
      </div>

      <Footer />
    </div>
  );
};

export default App;

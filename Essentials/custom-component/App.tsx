import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <p>Above we are rendering our own custom component</p>
      <p>
        The surrounding angle brackets <code>{"<></>"}</code> are fragment
        syntax. It allows us to group multiple elements without adding an extra
        node to the DOM. This is useful when you want to return multiple
        elements from a component without wrapping them in a single parent
        element.
      </p>
    </>
  );
}

export default App;

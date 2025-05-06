type Page3Props = {
  onRouteChange: (route: string) => void;
};

const Page3 = ({ onRouteChange }: Page3Props) => (
  <div className="App">
    <header className="App-header">
      <h1>Welcome to Page 3</h1>
    </header>
    <button onClick={() => onRouteChange("page1")}>Page1</button>
    <button onClick={() => onRouteChange("page2")}>Page2</button>
    <button className="disabled">Page3</button>
  </div>
);

export default Page3;

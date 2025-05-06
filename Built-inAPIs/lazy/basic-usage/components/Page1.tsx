type Page1Props = {
  onRouteChange: (route: string) => void;
};

const Page1 = ({ onRouteChange }: Page1Props) => (
  <div className="App">
    <header className="App-header">
      <h1>Welcome to Page 1</h1>
    </header>
    <button className="disabled">Page1</button>
    <button onClick={() => onRouteChange("page2")}>Page2</button>
    <button onClick={() => onRouteChange("page3")}>Page3</button>
  </div>
);

export default Page1;

type Page2Props = {
  onRouteChange: (route: string) => void;
};

const Page2 = ({ onRouteChange }: Page2Props) => (
  <div className="App">
    <header className="App-header">
      <h1>Welcome to Page 2</h1>
    </header>
    <button onClick={() => onRouteChange("page1")}>Page1</button>
    <button className="disabled">Page2</button>
    <button onClick={() => onRouteChange("page3")}>Page3</button>
  </div>
);

export default Page2;

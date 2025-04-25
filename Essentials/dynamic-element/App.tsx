import Container from "./Container";
import CustomWrapper from "./CustomWrapper";

const App = () => {
  return (
    <div>
      <Container Wrapper="div">Div container</Container>
      <Container Wrapper="p">P container</Container>
      <Container Wrapper={CustomWrapper}>custom Span wrapper</Container>
    </div>
  );
};

export default App;

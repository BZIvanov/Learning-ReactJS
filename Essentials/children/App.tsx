import CustomButton from "./CustomButton";

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <CustomButton
      onClick={handleClick}
      styles={{ color: "green", padding: "10px" }}
    >
      Submit
    </CustomButton>
  );
}

export default App;

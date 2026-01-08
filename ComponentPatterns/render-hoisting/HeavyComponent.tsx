function HeavyComponent() {
  // Simulate a heavy component by rendering a large list
  const items = Array.from(
    { length: 10000 },
    (_, i) => `Item ${i + 1}`
  );

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default HeavyComponent;

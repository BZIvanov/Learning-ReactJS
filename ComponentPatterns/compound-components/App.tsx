import { Tabs } from "./Tabs";

function App() {
  return (
    <Tabs defaultIndex={0}>
      <Tabs.List>
        <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
        <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel index={0}>
        <p>This is the content for Tab 1</p>
      </Tabs.Panel>

      <Tabs.Panel index={1}>
        <p>This is the content for Tab 2</p>
      </Tabs.Panel>
    </Tabs>
  );
}

export default App;

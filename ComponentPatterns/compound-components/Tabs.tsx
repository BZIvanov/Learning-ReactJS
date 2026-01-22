import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

/* ------------------------------------------------------------------ */
/* Context                                                            */
/* ------------------------------------------------------------------ */

type TabsContextValue = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs compound components must be used within <Tabs>");
  }
  return context;
}

/* ------------------------------------------------------------------ */
/* Root                                                               */
/* ------------------------------------------------------------------ */

type TabsProps = {
  defaultIndex?: number;
};

function TabsRoot({
  children,
  defaultIndex = 0,
}: PropsWithChildren<TabsProps>) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/* List                                                               */
/* ------------------------------------------------------------------ */

function TabsList({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

/* ------------------------------------------------------------------ */
/* Tab                                                                */
/* ------------------------------------------------------------------ */

type TabProps = {
  index: number;
};

function Tab({ index, children }: PropsWithChildren<TabProps>) {
  const { setActiveIndex } = useTabsContext();

  return (
    <button type="button" onClick={() => setActiveIndex(index)}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Panel                                                              */
/* ------------------------------------------------------------------ */

type TabPanelProps = {
  index: number;
};

function TabPanel({ index, children }: PropsWithChildren<TabPanelProps>) {
  const { activeIndex } = useTabsContext();

  if (index !== activeIndex) return null;

  return <div>{children}</div>;
}

/* ------------------------------------------------------------------ */
/* Compound Export                                                    */
/* ------------------------------------------------------------------ */

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Tab,
  Panel: TabPanel,
});

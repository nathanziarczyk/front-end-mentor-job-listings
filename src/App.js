import React, { createContext, useReducer } from "react";
import Layout from "./components/Layout";
import JobsList from "./components/JobsList";
import { reducer, initialState } from "./context";
import Filter from "./components/Filter";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      <Layout>
        <Filter />
        <JobsList />
      </Layout>
    </Context.Provider>
  );
}

export const Context = createContext(initialState);

export default App;

import React from 'react';
import Layout from './components/Layout/Layout';
import TasksContainer from './components/Tasks/TasksContainer';
import LogoContainer from './components/LogoContainer/LogoContainer';
import TaskDetails from './components/TaskDetails/TaskDetails';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Layout>
      <TaskDetails />
      <LogoContainer />
      <TasksContainer />
    </Layout>
  );
}

export default App;

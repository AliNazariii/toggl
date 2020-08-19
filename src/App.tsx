import React from 'react';
import Layout from './components/Layout/Layout';
import TasksContainer from './components/Tasks/TasksContainer';
import LogoContainer from './components/LogoContainer/LogoContainer';

function App() {
  return (
    <Layout>
      <LogoContainer />
      <TasksContainer />
    </Layout>
  );
}

export default App;

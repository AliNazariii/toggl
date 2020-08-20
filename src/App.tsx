import React from 'react';
import Layout from './components/Layout/Layout';
import TasksContainer from './components/Tasks/TasksContainer';
import LogoContainer from './components/LogoContainer/LogoContainer';
import TaskDetails from './components/TaskDetails/TaskDetails';
import { useSelector } from 'react-redux';

interface State {
  taskDetails: {
    isOpen: boolean
  }
}

function App() {
  const isOpen = useSelector((state: State) => state.taskDetails.isOpen)
  return (
    <Layout>
      <TaskDetails isOpen={isOpen} />
      <LogoContainer />
      <TasksContainer />
    </Layout>
  );
}

export default App;

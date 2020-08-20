import React, { FunctionComponent } from 'react';
import Styles from './Layout.module.scss';
import BottomMenu from './BottomMenu/BottomMenu';
import RunningTaskContainer from '../RunningTask/RunningTaskContainer';
import { useSelector } from 'react-redux';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

interface State {
  runningTask: {
    isRunning: boolean
  }
}

const Layout: FunctionComponent = ({ children }) => {
  const isRunning = useSelector((state: State) => state.runningTask.isRunning)
  return(
    <div className={Styles.LayoutContainer}>
      <div className={Styles.ContentContainer}>
        {children}
      </div>
      <div className={Styles.FooterContainer}>
        <RunningTaskContainer running={isRunning} />
        <BottomMenu />
      </div>
    </div>
  )
}

export default Layout;
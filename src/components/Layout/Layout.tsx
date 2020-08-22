import React, { FunctionComponent } from 'react';
import Styles from './Layout.module.scss';
import BottomMenu from './BottomMenu/BottomMenu';
import RunningTaskContainer from '../RunningTask/RunningTaskContainer';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const Layout: FunctionComponent = ({ children }) => {
  return(
    <div className={Styles.LayoutContainer}>
      <div className={Styles.ContentContainer}>
        {children}
      </div>
      <div className={Styles.FooterContainer}>
        <RunningTaskContainer />
        <BottomMenu />
      </div>
    </div>
  )
}

export default Layout;
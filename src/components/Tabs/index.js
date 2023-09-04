import React, { useState } from 'react';
import styles from './styles.module.scss';


const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }
      return (
        <div className={styles.container}>
        <div className={styles.tabs}>
          <div className={toggleState === 1 ? styles.tabItemActive : styles.tabItem} onClick={() => toggleTab(1)}>
            Description
          </div>
          <div className={toggleState === 2 ? styles.tabItemActive : styles.tabItem} onClick={() => toggleTab(2)}>
            Review
          </div>
          <div className={styles.line}></div>
        </div>
      
        <div className={styles.tabContent}>
          <div className={toggleState === 1 ? styles.tabPaneActive : styles.tabPane}>
            <h2>React</h2>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
          </div>
          <div  className={toggleState === 2 ? styles.tabPaneActive : styles.tabPane}>
            <h2>Angular</h2>
            <p>Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.</p>
          </div>
        
        </div>
      </div>
      );

  };
  
  export default Tabs;
import React, { useState } from 'react';
import { Tabs } from 'antd';
import Profile from './Profile.tsx';
import ComponentB from'./MycomponentB copy.tsx';
import ComponentC from './MucomponeneC.tsx';
// Destructure TabPane from Tabs
const { TabPane } = Tabs;

const ParentComponent = () => {
  const [activeKey, setActiveKey] = useState('1'); // To track the active tab

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
<div className='w-screen' style={{background:"blue", display: 'flex', height: '700px',justifyContent: 'center',position:"relative" }}>

      {/* Sidebar for Tabs on the left */}
      <div style={{
  background: 'white',
  padding: '10px',
  position: 'absolute',
  top: '30px',
  left: '50px',
  height:"500px",
  width:"full"
}}>
        <Tabs
          tabPosition="right"
          activeKey={activeKey}
          onChange={handleTabChange}
          style={{ height: '100%' }}
        >
          <TabPane tab="A" key="1">
            <Profile />
          </TabPane>
          <TabPane tab="B" key="2">
            <ComponentB />
          </TabPane>
          <TabPane tab="C" key="3">
            <ComponentC />
          </TabPane>
        </Tabs>
      </div>

      
      </div>
  
  );
};

export default ParentComponent;

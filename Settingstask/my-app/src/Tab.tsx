import React, { FC } from 'react';
import { Tabs } from 'antd';

interface TabsComponentProps {
  onTabClick: (tab: string) => void;
}

const { TabPane } = Tabs;

const TabsComponent: React.FC<TabsComponentProps> = ({ onTabClick }) => {
  return (
    <div className='bg-white max-w-[200px] '>
        <div className='w-full '><h1 className='text-3xl font-semibold flex pl-5 justify-start mt-16'>Settings</h1></div>
        <div className='w-full '><h1 className='text-xl font-semibold flex justify-start pl-5 mt-6 mb-4'>User Settings</h1></div>
        <div className='bg-white max-w-[200px] flex justify-start'>
    <Tabs tabPosition='right' defaultActiveKey="A" onChange={onTabClick}
    tabBarStyle={{ fontSize: '16px', fontWeight: '300', fontFamily: 'Arial, sans-serif' }}>
      <TabPane tab="Basic Information" key="A">
        
      </TabPane>
      <TabPane tab="Aircraft" key="B">
        
      </TabPane>
      <TabPane tab="Hangars" key="C">
        
      </TabPane>
      <TabPane tab="Reservations" key="D">
        
        </TabPane>
        <TabPane tab="Messenger" key="E">
        
        </TabPane>
    </Tabs>

    </div>
    <div><h1 className='text-2xl font-semibold mt-14 pl-5'>Billing</h1></div>
    <div><h1 className='text-xl pl-5'>Billing & Payment</h1></div>
    </div>
  );
};

export default TabsComponent;

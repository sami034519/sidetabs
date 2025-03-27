import React, { useState } from 'react';
import TabsComponent from "./Tab.tsx"
import ContentComponent from './ContentComponent.tsx';

const ParentComponent1: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('A');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className=''>
      <div className="flex gap-12 justify-center md:flex-row flex-col">
        <div style={{ width: '200px' }}>
          {/* Tabs Section with Ant Design */}
          <TabsComponent onTabClick={handleTabClick} />
        </div>

        <div style={{ flex: 1 }}>
          
          <ContentComponent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default ParentComponent1;

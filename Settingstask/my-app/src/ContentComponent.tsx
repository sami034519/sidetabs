import React from 'react';
import Profile from './Profile.tsx';
interface ContentComponentProps {
  activeTab: string;
}

const ContentComponent: React.FC<ContentComponentProps> = ({ activeTab }) => {
  return (
    <div style={{ padding: '20px', marginTop: '20px' }}>
      {activeTab === 'A' && <Profile/>}
      {activeTab === 'B' && <div>Content of aircrafts</div>}
      {activeTab === 'C' && <div>Content of hangars</div>}
      {activeTab === 'D' && <div>Content of reservations </div>}
      {activeTab === 'E' && <div>Content Messengers</div>}
    </div>
  );
};

export default ContentComponent;

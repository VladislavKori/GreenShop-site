// Libs
import React from 'react';

// Component
import {Header, UserSettingsSidebar} from '../components/imports'

function SettingsLayout({children}) {
  return (
    <div className="wrapper">
      <Header />
      <div style={{ display: 'flex', margin: '40px 0', columnGap: '30px'}} >
        <UserSettingsSidebar />
        {children}
      </div>
    </div>
  )
}

export default SettingsLayout;

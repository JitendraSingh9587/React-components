import React, { useState } from 'react';
import Icon from 'awesome-react-icons/lib/cjs/Icon';
import { Navigation } from 'react-minimal-side-navigation/lib';
import { useLocation, useHistory } from 'react-router-dom';

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";


const Sidebar = () => {
  const history = useHistory();
  const location = useLocation();


  return (
    <React.Fragment>
      {/* wrapper div Sidebar */}
      <div>
        {/* First Wrapper div */}
        <div className='first-wrapper'>
          <div className='user-info'>
            <img src='' alt='Trail' />
            <h3>User Name</h3>
          </div>
        </div>

        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Project",
              itemId: "/projects",
              // Optional
              elemBefore: () => <Icon name="coffee" />
            },
            {
              title: "User",
              itemId: "/users",
              elemBefore: () => <Icon name="user" />,
            },
            {
              title: "Help",
              itemId: "/help",
              elemBefore: () => <Icon name="user" />,
            },
            {
              title: "Analytics",
              itemId: "/analytics",
              subNav: [
                {
                  title: "Intigration",
                  itemId: "/intigration",
                  // Optional
                  elemBefore: () => <Icon name="calendar" />
                }
              ]
            }
          ]}
        />
    </React.Fragment>
  )
}

export default Sidebar
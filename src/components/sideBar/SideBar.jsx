import React from 'react';
import './SideBar.scss';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
/* Component for the SideBar*/
const SideBar = () => {
  return (
    <div className='SideBar'>
      <Breadcrumbs />
      <h2>Novedades</h2>
    </div>
  );
};

export default SideBar;

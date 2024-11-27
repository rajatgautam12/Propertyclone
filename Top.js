import React, { useState } from 'react';
import './Top.css';

const Top = () => {
  const [activeTab, setActiveTab] = useState('Mumbai');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
  <section>
    <div className='container'>
        <div className='title'>
          <h2 >Top Projects</h2>
                  </div>
                 
        <div className='btn-top'> 
          <ul>
          <li><a href="">Mumbai</a></li>
          <li><a href="">Delhi</a></li>
          <li><a href="#whyus">Pune</a></li>
          <li><a href="#whyus">Bangalore</a></li>
          <li><a href="#whyus">Why Us?</a></li>
          <li><a href="#whyus">Why Us?</a></li>
          <li><a href="#whyus">Why Us?</a></li>
          </ul>

        </div>
        </div>
</section>
      
    
  );
};

export default Top;
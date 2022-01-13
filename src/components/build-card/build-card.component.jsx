import React from 'react'

import './build-card.styles.scss'
 const BuildCard = ({ icon, text, watrning }) => (
   <div className={`build-card ${watrning && 'watrning'}`}>
     <img className="build-card-icon" src={icon} alt="" />
     <h4 className="build-card-text">{text}</h4>
   </div>
 );
export default BuildCard

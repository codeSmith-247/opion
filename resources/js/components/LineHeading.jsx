import React from 'react';
import '../../css/components/lineheading.css';


const LineHeading = ({ heading }) => {
  return (
    <div className = 'line-heading flex-row'>
        <div className = 'line'></div>
        <div className = 'heading'> {heading}</div>
    </div>
  )
}

export default LineHeading
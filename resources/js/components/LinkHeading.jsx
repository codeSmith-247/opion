import React from 'react';
import '../../css/components/linkheading.css';


const LinkHeading = ({heading, link_text, link}) => {
  return (
    <div className =  'link-heading flex-row flex-between'>
        <h4>{heading}</h4>

        <div className =  'link flex-row'>
            
            <span>{link_text}</span>

            <div className =  'icon'>
                <i className =  'bi bi-arrow-right'></i>
            </div>
        </div>
    </div>
  )
}

export default LinkHeading
import React from 'react';
import '../../css/components/loading.css';

const PageLoader = () => {
  return (
    <div className = 'loading flex-col flex-center full-vhw p-fix top left z-5'>
        <div className = 'image'>
            <img src = '/images/logo.png' className = 'obj-fit' />
        </div>

        <div className = 'animator p-rel ov-hidden'>
            <div className = 'bar p-rel'></div>
        </div>
    </div>
  )
}

export default PageLoader
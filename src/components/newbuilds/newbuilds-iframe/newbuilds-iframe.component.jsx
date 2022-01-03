import React from 'react';
import './newbuilds-iframe.styles.scss';
const IframeMap = ({ url }) => (
  <div className="iframe-map">
    <iframe
      class="map_iframe"
      frameborder="0"
      scrolling="no"
 
      src="https://maps.google.com/maps?&amp;height=400&amp;hl=en&amp;q=ukraine vinnissa&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    ></iframe>
  </div>
);
export default IframeMap;

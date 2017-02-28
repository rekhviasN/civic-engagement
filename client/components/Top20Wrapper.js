import React from 'react';
import Header from './HeaderView';


const iconUrls = [
  ['http://www.webarti.com/projects/images/palette-ninja.png', 'Profile', 'routeTBD'],
  ['http://www.webarti.com/projects/images/palette-ninja.png', 'Your Reps', 'routeTBD'],
  ['http://www.webarti.com/projects/images/palette-ninja.png', 'Map', '/map'],
  ['http://www.webarti.com/projects/images/palette-ninja.png', 'Events', 'routeTBD'],
  ['http://www.webarti.com/projects/images/palette-ninja.png', 'Friends', 'routeTBD']
];

const Top20Wrapper = () =>
  (
    <div className="top20-main">
      <div className="top20-header header">
        <header><Header headerIcons={iconUrls} /></header>
      </div>
      <div className="row" />
    </div>
  );

export default Top20Wrapper;

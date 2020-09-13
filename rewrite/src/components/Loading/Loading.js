// loading symbol

import React from 'react';
import '../../sass/main.scss';

export const Loading = ()  => {
  return (
    <div>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <p>SM</p>
      </div>
    </div>
  );
}


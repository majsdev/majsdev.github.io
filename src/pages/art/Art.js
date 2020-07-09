import React from 'react';
import {
    pedestal,
    percarious,
} from './themes'

function Art() {
  return (
    <div className="Art">
        { percarious[0].note }
    </div>
  );
}

export default Art;

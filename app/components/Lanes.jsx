import React from 'react';
import Lane from './Lane';

const Lanes = ({lanes}) => (
  <div className='lanes'>
    {lanes.map(lane =>
      <Lane
        key= {lane.id}
        lane = {lane}
      />
    )}
  </div>
);

export default Lanes;

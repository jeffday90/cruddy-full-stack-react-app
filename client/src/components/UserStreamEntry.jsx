import React from 'react';

const UserStreamEntry = (props) => (
  <div>
    <h4>
      {props.user.name}
    </h4>
    <ul>
      {props.user.fact}
    </ul>
  </div>
);
export default UserStreamEntry;

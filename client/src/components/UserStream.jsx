import React from 'react';
import UserStreamEntry from './UserStreamEntry.jsx';

const ShowStream = ({ users }) => (
  <div>
    <div>
      {users.map((user) => <UserStreamEntry key={user.id} user={user} />)}
    </div>
  </div>
);

// ShowStream.propTypes = {
//   users: React.propTypes.string.isRequired,
// };

export default ShowStream;

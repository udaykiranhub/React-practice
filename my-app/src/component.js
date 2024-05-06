import React, { useContext } from 'react';
import { context } from './trail.js'; // Import the context

function Component() {
  // 1. Get the data from context
  const user = useContext(context);

  // 2. Check if user exists before rendering details (optional)
  console.log(user)
  return (
    <div>
      <p>User details from context:</p>
      <ul>
        {user && (
          <>
            <li>Name: {user.name}</li>
            <li>Age: {user.age} (assuming you have age in your data)</li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Component;

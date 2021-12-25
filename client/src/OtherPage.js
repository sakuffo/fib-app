import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <p>This is some other page.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}
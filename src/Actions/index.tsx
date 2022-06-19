import React from 'react';

export function Actions() {
  return (
    <footer>
      <aside className='sidebar'>
        <a href='/refresh' className='button-link'>
          Refresh
        </a>
        <a href='/remove' className='button-link'>
          Remove
        </a>
      </aside>
    </footer>
  );
}

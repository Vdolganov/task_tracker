import React from 'react';
import history from '../../../history';

const GoBack = () => (
  <div style={{
    width: '100%', background: '#fff', boxShadow: '1px 1px 4px gray', padding: '10px',
  }}
  >
    <button onClick={() => { history.goBack(); }}>Go Back</button>
  </div>
);

export default GoBack;

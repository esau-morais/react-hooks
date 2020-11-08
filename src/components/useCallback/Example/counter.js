import React from 'react';

function Counter({ text, count }) {
  console.log(`Rendering ${text}`)

  return <>{text} • {count}</>
}

export default React.memo(Counter);

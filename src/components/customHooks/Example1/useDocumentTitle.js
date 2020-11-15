import { useState, useEffect } from 'react';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

function UseDocumentTitle() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <>
      <h3>useDocumentTitle</h3>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </>
  )
}

export default UseDocumentTitle;

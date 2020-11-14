import { useEffect, useRef } from 'react';

function Example() {
  const inputRef = useRef(null);

  useEffect(() => {
    // focus the input element
    inputRef.current.focus()
  }, [])

  return (
    <>
      <h3>Auto focus input (useRef)</h3>
      <input ref={inputRef} type="text" />
    </>
  )
}

export default Example;

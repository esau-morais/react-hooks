import { useState, useCallback } from 'react';
import Counter from './counter';
import Button from './button';

function Example() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])

  return (
    <>
      <Counter text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment age</Button>
      <Counter text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment salary</Button>
    </>
  )
}

export default Example;

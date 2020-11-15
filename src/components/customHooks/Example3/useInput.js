import useInput from '../../../hooks/useInput';

function UseInput() {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const handleSubmit = e => {
    e.preventDefault();

    alert(`Hello, ${firstName} ${lastName}`)

    resetFirstName();
    resetLastName();
  }

  return (
    <>
      <h3>useInput</h3>
      <form onSubmit={handleSubmit}>
        <input
          {...bindFirstName}
        />
        <input
          {...bindLastName}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default UseInput;


import { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingOne() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        setIsLoading(false);
        setPost(res.data);
        setError('')
      })
      .catch(err => {
        setIsLoading(false);
        setPost({});
        setError('Something went wrong :(')
      })
  }, [])

  return (
    <>
      <h3>Fetching data (useState + useEffect)</h3>
      { isLoading ? '...' : post.title}
      { error ? error : null }

      <br />
      <br />
      <hr />
    </>
  )
}

export default DataFetchingOne;

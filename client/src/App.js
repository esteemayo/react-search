import { useEffect, useState } from 'react';

import Table from 'components/Table';
import { getUsers } from 'services/userService';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length === 0 || query.length > 2)
      (async () => {
        try {
          const { data } = await getUsers(query);
          setData(data);
        } catch (err) {
          console.log(err);
        }
      })();
  }, [query]);

  return (
    <div className='container'>
      <div className='app'>
        <input
          type='text'
          className='search'
          placeholder='Search'
          onChange={(e) => setQuery(e.target.value)}
        />
        <Table data={data} />
      </div>
    </div>
  );
}

export default App;

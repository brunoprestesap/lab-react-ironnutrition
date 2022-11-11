import { Divider, Input } from 'antd';

// Iteration 5
function Search({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className='search'>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={search}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;

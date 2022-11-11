import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Divider, Button } from 'antd';
import Search from './components/SearchBar';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);


  function handleShowForm(){
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      {showForm && (
        <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods}/>
      )}

      <Button onClick={handleShowForm}>{showForm ? <span>Hide Form</span> : <span>Add New Food</span>}</Button>

      <Search search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>
      <FoodBox allFoods={allFoods} setAllFoods={setAllFoods} search={search}/>
    </div>
  );
}

export default App;

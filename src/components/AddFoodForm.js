import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

function AddFoodForm({ allFoods, setAllFoods }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    //é responsável guardar os dados fornecidos em algum lugar
    e.preventDefault();
    setAllFoods([...allFoods, form]);

    setForm({
      name: '',
      image: '',
      calories: 0,
      servings: 0,
    });
  }

  return (
    <form className="form">
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <label>Image</label>
      <Input
        type="text"
        name="image"
        value={form.image}
        onChange={handleChange}
      />

      <label>Calories</label>
      <Input
        type="number"
        name="calories"
        value={form.calories}
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        type="number"
        name="servings"
        value={form.servings}
        onChange={handleChange}
      />

      <Button onClick={handleSubmit}>Create</Button>
    </form>
  );
}

export default AddFoodForm;

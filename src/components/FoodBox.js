import { Card, Col, Button, Row } from 'antd';

function FoodBox({ allFoods, setAllFoods, search }) {
  function handleDelete(foodSelect) {
    const foodDeleted = allFoods.filter((food) => {
        return food.name !== foodSelect;
    })

    setAllFoods(foodDeleted);
  }

  return (
    <div className="site-card-wrapper list">
      <Row gutter={32}>
        {allFoods
          .filter((food) => {
            return food.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((food) => {
            return (
              <Col span={6}>
                <Card
                  key={food.name}
                  title={food.name}
                  style={{ width: 230, height: 300, margin: 10 }}
                >
                  <img src={food.image} height={60} alt="food" />
                  <p>Calories: {food.calories}</p>
                  <p>Servings: {food.servings}</p>
                  <p>
                    <b>Total Calories:</b> {food.calories * food.servings}kcal
                  </p>
                  <Button onClick={() => handleDelete(food.name)} type="primary">
                    Delete
                  </Button>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default FoodBox;

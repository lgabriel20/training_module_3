// output meal items in grid
// meal prop = meals that should be outputted

import MealItem from './meal-item';
import classes from './meals-grid.module.css';

export default function MealsGrid({meals}) {
  return (
    <ul className={classes.meals}>
      {meals.map(meal =>
      (<li> key={meal.id}
        <MealItem {...meal} />
      </li>
    ))}
    </ ul>
  );
}


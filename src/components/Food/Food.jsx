import React from "react";
import "./Food.css";

const Food = (props) => {
	const {
		idMeal: id,
		strMeal: name,
		strInstructions: description,
		strMealThumb: image,
	} = props.food;

	return (
		<div className="food">
			<img src={image} alt="food image" />
			<h3>{name}</h3>
			<p className="food-details">
				{description.length > 50
					? description.slice(0, 50) + "..."
					: description}
			</p>
			<button
				className="add-to-cart-btn"
				onClick={() => props.selectFoodEvent(props.food)}
			>
				Add to cart
			</button>
		</div>
	);
};

export default Food;

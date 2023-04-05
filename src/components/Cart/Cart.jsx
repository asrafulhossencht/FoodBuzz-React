import React from "react";
import "./Cart.css";

const Cart = ({allSelectedFood}) => {
	return (
		<div className="cart">
			<h2>Total added food: {allSelectedFood.length}</h2>
			<ol>
				{allSelectedFood.map((selectFood, index) => (
					<li className="selected-food" key={selectFood.idCategory}>
                        <span>{index + 1}</span>
						<img
							src={selectFood.strCategoryThumb}
							alt="selected food"
						/>
						<h4>{selectFood.strCategory}</h4>
					</li>
				))}
			</ol>
		</div>
	);
};

export default Cart;

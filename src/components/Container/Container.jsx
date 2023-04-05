import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import Swal from "sweetalert2";
import "./Container.css";

const Container = () => {
	const [allFood, setAllFood] = useState([]);
	const [allSelectedFood, setAllSelectedFood] = useState([]);
	const [firstLetter, setFirstLetter] = useState("");
	const [
		isSearchByFirstLetterBtnClicked,
		setIsSearchByFirstLetterBtnClicked,
	] = useState(false);
	const [foodName, setFoodName] = useState("");
	const [isSearchByNameBtnClicked, setIsSearchByNameBtnClicked] =
		useState(false);

	//  All food loaded matched by name and it is the first load when the page render
	useEffect(() => {
		const loadFoodNameMatchedFood = async () => {
			const res = await fetch(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=` +
					foodName
			);
			const loadedMatchedFood = await res.json();
			setIsSearchByNameBtnClicked(false);
			setAllFood(loadedMatchedFood.meals);
		};
		loadFoodNameMatchedFood();
	}, [isSearchByNameBtnClicked]);

	// All food loaded matched by first letter
	useEffect(() => {
		const loadFirstLetterMatchedFood = async () => {
			const res = await fetch(
				`https://www.themealdb.com/api/json/v1/1/search.php?f=` +
					firstLetter
			);
			const loadedMatchedFood = await res.json();
			setIsSearchByFirstLetterBtnClicked(false);
			setAllFood(loadedMatchedFood.meals);
		};
		loadFirstLetterMatchedFood();
	}, [isSearchByFirstLetterBtnClicked]);

	const selectFood = (selectedFood) => {
		const matchedFood = allSelectedFood.find(
			(food) => food.idCategory == selectedFood.idCategory
		);
		if (matchedFood) {
			Swal.fire("You have already added this food in your cart");
		} else {
			setAllSelectedFood([...allSelectedFood, selectedFood]);
		}
	};

	// load all first letter matched food event
	const searchBYFirstLetterEvent = () => {
		setIsSearchByFirstLetterBtnClicked(true);
	};

	const searchByFirstLetterInputEvent = (event) => {
		if (event.target.value.length > 1) {
			event.target.value = event.target.value[0];
		}
		setFirstLetter(event.target.value[0]);
	};

	// load all name matched food event
	const searchByNameEvent = () => {
		setIsSearchByNameBtnClicked(true);
	};

	const searchByNameInputEvent = (event) => {
		setFoodName(event.target.value);
	};

	return (
		<div>
			<div className="search-food">
				<div className="search-by-first-letter">
					<input
						type="text"
						onChange={searchByFirstLetterInputEvent}
						placeholder="Enter the first letter of your food"
					/>
					<button onClick={searchBYFirstLetterEvent}>
						Search By First Letter
					</button>
				</div>
				<div className="search-by-name">
					<input
						type="text"
						onChange={searchByNameInputEvent}
						placeholder="Enter the first letter of your food"
					/>
					<button onClick={searchByNameEvent}>Search By Name</button>
				</div>
			</div>
			<div className="all-food-container">
				<div className="all-food">
					{allFood
						? allFood.map((food) => (
								<Food
									food={food}
									key={food.idMeal}
									selectFoodEvent={selectFood}
								></Food>
						  ))
						: <span className="no-food-found">No Food Found</span>}
				</div>
				<div className="all-food-cart-container">
					<Cart allSelectedFood={allSelectedFood}></Cart>
				</div>
			</div>
		</div>
	);
};

export default Container;

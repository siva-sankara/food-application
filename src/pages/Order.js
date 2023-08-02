import React, { useState } from "react";
import "./Order.css";
import  food  from "../body components/fooddata";
import Fotter from "../body components/fotter/Fotter";
import Buttons from "./productitems/Buttons";
import Card from "./productitems/Card";
import { Link } from "react-router-dom";

const Order = () => {
  const [selectedCategory, setSelectedCategory] = useState("laptop");
  const categories = Array.from(new Set(food.map((item) => item.category)));
  const filteredItems =
    selectedCategory === "laptop"
      ? food
      : food.filter((item) => item.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

 
  return (
    <div className="oder-mainpage">
      {/* <div className="faq1 ">
        <p className="head faqhead oredr1">
          Get your food <span>delivered</span>, or <span>pick-up</span> in
          store.
        </p>
      </div> */}

      <div className="row1">
        <div className="main-row4">
          <span className="head">Browse our menu</span>
        </div>
        <Buttons
          categories={categories}
          handleCategoryChange={handleCategoryChange}
         
        />
        
        <div className="cardslist">
          <div className="cards">
            
            {filteredItems.map((item) => (
              <Card key={item.id} title={item.title} img={item.thumbnail} desc={item.description} price={item.price} />
            ))}
          </div>
        </div>
      </div>
     {/* <Fotter /> */}
    </div>
  );
};

export default Order;

import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Home.scss";
import fishMeal1 from "../../assents/ready-fish-1.jpg";

const Home = () => {
  return (
    <main>
      <div className='left-navigation-images-container'>
        <nav className='vertical-navigation-bar'>
            <h1> All Categories</h1>
            <u className='vertical-nav-menu'>
                <li className='vertical-nav-item'> <NavLink to="/organicMeal"> Organic Meal </NavLink></li>

                <li className='vertical-nav-item'> <NavLink to="/breads"> Breads & Bakery </NavLink></li>

                <li className='vertical-nav-item'> <NavLink to="/dairy"> Dairy, Cheese & Eggs Fresh Flower</NavLink></li>

                <li className='vertical-nav-item'> <NavLink to="/flowers"> Fresh Flowers</NavLink></li>

                <li className='vertical-nav-item'> <NavLink to="/meat"> Meat & Seafood </NavLink></li>

                <li className='vertical-nav-item'> <NavLink to="/beverages"> Beverages & Alcoholic beverage </NavLink></li>

                <li className='vertical-nav-item'> <NavLink to="/chocolate"> Chocolate & Candy </NavLink></li>

                <li className='vertical-nav-item'> <NavLink to="/breakfast"> Breakfast Foods </NavLink></li>

                <li className='vertical-nav-item'> <NavLink to="/lunch"> Lunch & Dinner Foods </NavLink></li>

                <li className='vertical-nav-item'> <NavLink to="/clothes"> Clothes </NavLink></li>

                <li className='vertical-nav-item'> <NavLink to="/shoes"> Shoes </NavLink></li>
            </u>
        </nav>
        <figure>
          <img src={fishMeal1} alt=" Fish Meal" />
        </figure>
      </div>

      <section>
        <h2> Featured Collection</h2>
        <figure>
          <img src="" alt="" />
        </figure>
      </section>

    </main>
  )
}

export default Home;
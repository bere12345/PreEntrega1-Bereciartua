import React from 'react';

const Navbar = () => {
  const categories = ['remera', 'pantalones', 'buzos', 'zapatillas'];

  return (
    <header>
      <h1>Tomas.brannd ecommerce</h1>
      <nav>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <a href={`#${category}`}>{category}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
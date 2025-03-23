import { useState } from "react"; // react importacion libreria

// nombre del componente
function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card-pizza">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>${price.toLocaleString()}</p>
      <hr />
      <p>Ingredientes</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <hr />
      <button className="btn-ver-mas">Ver más</button>
      <button className="btn-agregar">Añadir</button>
    </div>
  );
}

export default CardPizza;

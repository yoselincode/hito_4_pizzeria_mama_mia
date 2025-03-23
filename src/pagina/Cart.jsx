import { useState } from "react";
import pizzaCart from "../../src/pizzaCart.json";
function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const handleQuantityChange = (id, amount) => {
    setCart((carritoPrevio) =>
      carritoPrevio
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + amount) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h4>Detalles del pedido:</h4>
      <table className="table">
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} alt={item.name} width="50" height="50" />
              </td>
              <td>{item.name}</td>
              <td>${item.price.toLocaleString()}</td>
              <td>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  -
                </button>
              </td>
              <td>{item.quantity}</td>
              <td>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5>Total: ${total.toLocaleString()}</h5>
      <button className="btn btn-dark">Pagar</button>
    </div>
  );
}

export default Cart;

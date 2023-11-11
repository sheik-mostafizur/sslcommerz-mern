import {useState} from "react";

function App() {
  const [state, setState] = useState({
    name: "T-Shirt",
    price: 401.0,
    category: "xl",
  });

  const handlePay = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/payment/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
    const url = await res.json();
    window.location.href = url;
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>sslcommerz</h1>

      <form onSubmit={handlePay}>
        <input
          type="text"
          name="name"
          placeholder="product name"
          value={state.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="product price"
          value={state.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="category"
          value={state.category}
          onChange={handleChange}
        />
        <button type="submit">Pay now</button>
      </form>
    </>
  );
}

export default App;

let cart = new Set(JSON.parse(localStorage.getItem("cart")) || []);
const cartSection = document.getElementById("cart-section");
const cartTotal = document.getElementById("cart-total");

async function fetchAndRenderCart() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    const productsData = data.products;

    let total = 0;
    cartSection.innerHTML = "";

    if (cart.size === 0) {
      cartSection.innerHTML = "<p>Your cart is empty</p>";
      cartTotal.style.display = "none";
      return;
    }

    [...cart].forEach((id) => {
      const p = productsData.find((prod) => prod.id === id);
      if (p) {
        total += p.price;

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${p.thumbnail}" alt="${p.title}" style="width: 100%; height: 150px; object-fit: contain;" />
          <h4>${p.title}</h4>
          <p>₹${p.price}</p>
          <button onclick="removeFromCart(${p.id})"> Remove</button>
        `;
        cartSection.appendChild(card);
      }
    });

    cartTotal.textContent = `Total: Rs ${total}`;
    cartTotal.style.display = "block";
  } catch (err) {
    cartSection.innerHTML = "<p>Error loading cart.</p>";
    console.error("Error:", err);
  }
}

function removeFromCart(id) {
  cart.delete(id);
  localStorage.setItem("cart", JSON.stringify([...cart]));
  fetchAndRenderCart(); // refresh
}

window.onload = fetchAndRenderCart;

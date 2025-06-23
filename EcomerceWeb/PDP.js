const productId = Number(sessionStorage.getItem("selectedProductId"));
const cart = new Set(JSON.parse(localStorage.getItem("cart")) || []);
const wishlist = new Set(JSON.parse(sessionStorage.getItem("wishlist")) || []);

async function fetchProductDetails(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await res.json();

    const container = document.getElementById("product-details");
    container.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p><strong>Price:</strong> Rs${product.price}</p>
      <p><strong>Brand:</strong> ${product.brand}</p>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Description:</strong> ${product.description}</p>
      <button onclick="window.history.back()">Go Back</button>
      <button id="cartBtn">
        ${cart.has(product.id) ? "Remove From Cart" : "Add to Cart"}
      </button>
      <button id="wishlistBtn">
        ${wishlist.has(product.id) ? "❤️" : "🤍"}
      </button>
    `;

    document.getElementById("cartBtn").addEventListener("click", () => {
      if (cart.has(product.id)) cart.delete(product.id);
      else cart.add(product.id);
      localStorage.setItem("cart", JSON.stringify([...cart]));
      fetchProductDetails(productId);
    });

    document.getElementById("wishlistBtn").addEventListener("click", () => {
      if (wishlist.has(product.id)) wishlist.delete(product.id);
      else wishlist.add(product.id);
      sessionStorage.setItem("wishlist", JSON.stringify([...wishlist]));
      fetchProductDetails(productId);
    });
  } catch (err) {
    document.getElementById(
      "product-details"
    ).innerHTML = `<p>Error loading product details</p>`;
  }
}

if (productId) {
  fetchProductDetails(productId);
} else {
  document.getElementById(
    "product-details"
  ).innerHTML = `<p>No product selected</p>`;
}

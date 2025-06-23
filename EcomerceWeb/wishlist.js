const wishlist = new Set(JSON.parse(sessionStorage.getItem("wishlist")) || []);
const wishlistSection = document.getElementById("wishlist-section");

async function fetchAndRenderWishlist() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    const productsData = data.products;

    wishlistSection.innerHTML = "";

    if (wishlist.size === 0) {
      wishlistSection.innerHTML = "<p>Your wishlist is empty.</p>";
      return;
    }

    [...wishlist].forEach((id) => {
      const p = productsData.find((prod) => prod.id === id);
      if (p) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${p.thumbnail}" alt="${p.title}" style="width: 100%; height: 150px; object-fit: contain;" />
          <h4>${p.title}</h4>
          <p>₹${p.price}</p>
        `;
        wishlistSection.appendChild(card);
      }
    });
  } catch (err) {
    wishlistSection.innerHTML = "<p>Error loading wishlist.</p>";
    console.error(err);
  }
}

window.onload = fetchAndRenderWishlist;

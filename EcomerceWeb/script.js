const PRODUCTS_PER_PAGE = 12;
let currentPage = 1;
const cachedPages = new Map();
let totalProducts = 0;
let searchQuery = "";
let selectedCategory = "";

const wishlist = new Set(JSON.parse(sessionStorage.getItem("wishlist")) || []);
let cart = new Set(JSON.parse(localStorage.getItem("cart")) || []);

const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const cartBtn = document.getElementById("cart-btn");
const pageInfo = document.getElementById("page-info");
const categoryFilter = document.getElementById("category-filter");

cartBtn.addEventListener("click", () => {
  window.location.href = "cart.html";
});

async function fetchProducts(page = 1) {
  const skip = (page - 1) * PRODUCTS_PER_PAGE;

  if (!selectedCategory && !searchQuery && cachedPages.has(page)) {
    totalProducts = cachedPages.get(-1);
    renderProducts(cachedPages.get(page));
    return;
  }

  let url = "";
  console.log(selectedCategory, "selectedCategory");
  if (searchQuery) {
    url = `https://dummyjson.com/products/search?q=${searchQuery}&limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
  } else if (selectedCategory) {
    url = `https://dummyjson.com/products/category/${selectedCategory}?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
  } else {
    url = `https://dummyjson.com/products?sortBy=title&order=asc&limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    if (!data || !data.products || data.products.length === 0) {
      throw new Error("No products Found");
    }

    totalProducts = data.total;

    const pageProducts = data.products.map((p) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      thumbnail: p.thumbnail,
    }));

    if (!searchQuery && !cachedPages.has(page)) {
      if (!cachedPages.has(-1)) {
        cachedPages.set(-1, totalProducts);
      }
      cachedPages.set(page, pageProducts);
    }

    renderProducts(pageProducts);
  } catch (error) {
    console.error("Fetch error:", error);
    productContainer.innerHTML = "<p>No Product found</p>";
    pageInfo.textContent = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
  }
}

function renderProducts(products) {
  if (!products || products.length === 0) {
    productContainer.innerHTML = "<p>No products found</p>";
    pageInfo.textContent = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  productContainer.innerHTML = "";

  products.forEach((p) => {
    const isInCart = cart.has(p.id);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.thumbnail}" alt="${
      p.title
    }" style="width: 100%; height: 150px; object-fit: contain;" />
      <h4>${p.title}</h4>
      <p>Rs ${p.price}</p>
      <div class="buttons">
        <button onclick="sessionStorage.setItem('selectedProductId', '${
          p.id
        }'); window.location.href='PDP.html'">details</button>
        <button onclick="addToCart(${p.id})">${
      isInCart ? "Remove From Cart" : "Add to Cart"
    }</button>
        <button onclick="toggleWishlist(${p.id})">${
      wishlist.has(p.id) ? "❤️" : "🤍"
    }</button>
      </div>
    `;
    productContainer.appendChild(card);
  });

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function addToCart(id) {
  if (cart.has(id)) cart.delete(id);
  else cart.add(id);
  localStorage.setItem("cart", JSON.stringify([...cart]));
  fetchProducts(currentPage);
}

function toggleWishlist(id) {
  if (wishlist.has(id)) wishlist.delete(id);
  else wishlist.add(id);
  sessionStorage.setItem("wishlist", JSON.stringify([...wishlist]));
  fetchProducts(currentPage);
}

searchInput.addEventListener(
  "input",
  debounce(() => {
    searchQuery = searchInput.value.trim().toLowerCase();
    currentPage = 1;
    fetchProducts(currentPage);
  }, 1000)
);

// Debounce
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Navigation
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchProducts(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  if (currentPage < totalPages) {
    currentPage++;
    fetchProducts(currentPage);
  }
});

categoryFilter.addEventListener("change", () => {
  selectedCategory = categoryFilter.value;
  console.log(selectedCategory);
  currentPage = 1;
  fetchProducts(currentPage);
});

async function loadCategories() {
  try {
    const res = await fetch("https://dummyjson.com/products/category-lists");
    const categories = await res.json();

    categories.forEach((cat) => {
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
      categoryFilter.appendChild(option);
    });
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

window.onload = () => {
  loadCategories();
  fetchProducts(currentPage);
};

const baseUrl = "https://dummyjson.com"; // use this in the endpoints

const endPoints = {
  getAllProducts: "/xyzs",
};

const Files = {
  logo: "/src/logo.png",
};

const Routes = {
  HomePage: "/home",
  CartPage: "/Cart",
};

// Routes.CartPage

{
  /* <ing src={Files.logo}></ing> */
}

function getProductDetails(page, limit, category, search) {
  const params = {
    page,
    limit,
    category,
    search,
  };
  //use direct method to add these params
  url = `${baseUrl}/${endPoints.getAllProducts}`;
  // fetch this end point
  // return
}

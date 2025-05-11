// Sample product data
const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 59.99,
    image: "images/product1.jpg",
    description: "Comfortable running shoes for everyday use.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 89.99,
    image: "images/product2.jpg",
    description: "Noise-cancelling over-ear headphones.",
  },
  // Add more products as needed
];

// Load products on index.html
if (document.getElementById("product-list")) {
  const productList = document.getElementById("product-list");
  const searchInput = document.getElementById("search");

  function displayProducts(filteredProducts) {
    productList.innerHTML = "";
    filteredProducts.forEach((product) => {
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <p>${product.description}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }

  displayProducts(products);

  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(query)
    );
    displayProducts(filtered);
  });
}

// Fallback function if cart functionality isn't built yet
function addToCart(id) {
  alert(`Product ${id} added to cart!`);
}

// Login/Logout UI handling
document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("login-link");

  const username = localStorage.getItem("user");
  if (username) {
    // Replace login link with greeting and logout
    loginLink.textContent = `Logout (${username})`;
    loginLink.href = "#";
    loginLink.addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.reload();
    });
  }
});

const products = [
  { name: "Smartphone", category: "electronics", price: 300, rating: 4.5 },
  { name: "T-shirt", category: "fashion", price: 25, rating: 4.0 },
  { name: "Laptop", category: "electronics", price: 900, rating: 4.8 },
  { name: "Novel", category: "books", price: 15, rating: 4.2 },
  { name: "Jeans", category: "fashion", price: 40, rating: 3.8 },
  { name: "Tablet", category: "electronics", price: 200, rating: 4.1 },
  { name: "Biography", category: "books", price: 20, rating: 4.6 }
];

let filteredProducts = [...products];

function displayProducts(items) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  items.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
      <p>Rating: ⭐ ${product.rating}</p>
    `;
    container.appendChild(card);
  });
}

function filterProducts() {
  const category = document.getElementById("category-filter").value;
  if (category === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(p => p.category === category);
  }
  sortProducts(); // sort after filtering
}

function sortProducts() {
  const sortBy = document.getElementById("sort-by").value;

  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filteredProducts);
}

// Initial render
displayProducts(filteredProducts);

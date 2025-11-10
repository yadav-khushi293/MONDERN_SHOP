let api = "https://weather-app-6du4.onrender.com/shop";
let apiCart = "https://weather-app-6du4.onrender.com/cart";

let allData = [];
let currentPage = 1;
let itemsperPage = 8;

const apiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => {
      allData = res;
      showPage(currentPage);
      renderPagination();
    })
    .catch((err) => console.log(err));
};

const appenddata = (data) => {
  const datashow = document.querySelector("#product");
  const top_rated_products = document.querySelector("#top_rated_products");
  const top_rated_products1 = document.querySelector("#top_rated_products1");
  datashow.innerHTML = "";
  top_rated_products.innerHTML = "";
  top_rated_products1.innerHTML = "";

  let product = data.slice(1, 13);

  for (let i = 3; i <= 10 && i < data.length; i++) {
    let item = data[i];

    let gridDiv = document.createElement("div");
    let flexDiv = document.createElement("div");
    let productImg = document.createElement("img");
    let title = document.createElement("h5");
    let price = document.createElement("p");

    gridDiv.className = "gridDiv";
    productImg.className = "productImg";
    title.className = "productTitle";
    price.className = "productPrice";
    flexDiv.className = "flexDiv";

    productImg.src = item.img;
    title.innerHTML = item.title;
    price.innerHTML = `$${item.price}`;

    gridDiv.append(title, price);
    flexDiv.append(productImg, gridDiv);
    top_rated_products.append(flexDiv);
  }

  for (let i = 3; i <= 13 && i < data.length; i++) {
    let item = data[i];

    let gridDiv1 = document.createElement("div");
    let flexDiv1 = document.createElement("div");
    let productImg1 = document.createElement("img");
    let title1 = document.createElement("h5");
    let price1 = document.createElement("p");

    gridDiv1.className = "gridDiv1";
    productImg1.className = "productImg1";
    title1.className = "productTitle1";
    price1.className = "productPrice1";
    flexDiv1.className = "flexDiv1";

    productImg1.src = item.img;
    title1.innerHTML = item.title;
    price1.innerHTML = `$${item.price}`;

    gridDiv1.append(title1, price1);
    flexDiv1.append(productImg1, gridDiv1);
    top_rated_products1.append(flexDiv1);
  }

  data.forEach((el) => {
    const imageContainer = document.createElement("div");
    imageContainer.className = "iamgeContainer";

    let imgBox = document.createElement("div");
    let image = document.createElement("img");
    let text = document.createElement("h5");
    let price = document.createElement("p");
    let category = document.createElement("p");
    let cart = document.createElement("button");

    imgBox.className = "imgbox";
    category.className = "category";

    image.src = el.img;
    category.innerHTML = el.category;
    text.innerHTML = el.title;
    price.innerHTML = `$${el.price}`;
    cart.innerHTML = "Add To Cart";

    cart.addEventListener("click", () => {
      addToCart(el.id);
      cart.innerHTML = "View Cart";

      cart.onclick = () => {
        window.location.href = "Cart.html";
      };
    });

    imgBox.append(image, text, price, category, cart);
    imageContainer.append(imgBox);
    datashow.append(imageContainer);
  });
};

const showPage = (page) => {
  updateItemsPerPage();
  let start = (page - 1) * itemsperPage;
  let end = page * itemsperPage;
  let paginatedItems = allData.slice(start, end);

  appenddata(paginatedItems);
};

const renderPagination = () => {
  const pagination = document.querySelector("#pagination");
  pagination.innerHTML = "";

  let totalPages = Math.ceil(allData.length / itemsperPage);

  // Previous Button

  let prevBtn = document.createElement("button");
  prevBtn.innerHTML = "Prev";
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
      renderPagination();
    }
  });
  pagination.appendChild(prevBtn);

  // Page Number

  let pageNum = document.createElement("span");
  pageNum.className = "pageNum";
  pageNum.innerHTML = `Page ${currentPage} of ${totalPages}`;
  pagination.appendChild(pageNum);

  // Next Button

  let nextBtn = document.createElement("button");
  nextBtn.innerHTML = "Next";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
      renderPagination();
    }
  });
  pagination.appendChild(nextBtn);
};

// Add To Cart

const addToCart = async (id) => {
  // find the product by id from allData
  let product = allData.find((el) => el.id === id);

  if (!product) {
    alert("Product not found!");
    return;
  }

  try {
    // check if product already exists in cart
    let res = await fetch(`${apiCart}?id=${id}`);
    let data = await res.json();

    if (data.length > 0) {
      // already in cart → increment count
      let existing = data[0];
      await fetch(`${apiCart}/${existing.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count: (existing.count || 1) + 1 }),
      });
      updateCartCount();
    } else {
      // not in cart → add new with count = 1
      await fetch(apiCart, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...product, count: 1 }),
      });
      updateCartCount();
    }
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
};

// Cart Number

const updateCartCount = async () => {
  try {
    let res = await fetch(apiCart);
    let cartItems = await res.json();
    document.querySelector("#cart_count").innerText = cartItems.length;
  } catch (err) {
    console.log(err);
  }
};

// Search Function

const searchFunc = async () => {
  const query = document.querySelector("#search").value.trim().toLowerCase();
  if (!query) return;

  try {
    let [searchFetch] = await Promise.all([fetch(api)]);
    const filter = document.querySelector("#filter");
    filter.style.display = "none";
    const pagination = document.querySelector("#pagination");
    pagination.style.display = "none";
    const [data1] = await Promise.all([searchFetch.json()]);

    const filtered = await data1.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    // ✅ If no result found
    if (filtered.length === 0) {
      const datashow = document.querySelector("#product");
      const img = document.querySelector(".adventure");
      const parent = document.querySelector(".product_parent");
      img.style.display = "none";
      datashow.style.display = "block";
      parent.style.justifyContent = "center";
      datashow.innerHTML = `
    <div class="result">
      <h3>No results found. Please try a different keyword.</h3>
    </div>
  `;
      document.querySelector("#search").value = "";
      return;
    }

    appenddata(filtered);
    document.querySelector("#search").value = "";
  } catch (err) {
    console.error("Search failed:", err);
  }
};

// Pagination Is Changing On Media-Query (min-width: 841px) and (max-width: 1340px) With Sidebar

const updateItemsPerPage = () => {
  const width = window.innerWidth;
  const isSidebarActive = document.body.classList.contains("sidebar-active");

  // ✅ When sidebar active + within 841–1340px → show 6 items
  if (isSidebarActive && width >= 841 && width <= 1340) {
    itemsperPage = 6;
  } else {
    itemsperPage = 8; // Default
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#search");
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") searchFunc();
    });
  }
});

// Filter Functionality
const filterSelect = document.querySelector("#filter");

if (filterSelect) {
  filterSelect.addEventListener("change", async (e) => {
    const value = e.target.value;
    let filteredData = [...allData]; // clone to avoid overwriting

    if (value === "low_to_high") {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (value === "high_to_low") {
      filteredData.sort((a, b) => b.price - a.price);
    }

    allData = filteredData;
    currentPage = 1;
    showPage(currentPage);
    renderPagination();
  });
}

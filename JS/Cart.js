let apiCart = "https://weather-app-6du4.onrender.com/cart";

let allData = [];
let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
console.log(cartItems);
let currentPage = 1;
let itemsperPage = 5;
let token = sessionStorage.getItem("token");
// let path = window.location.pathname;


if (!token || token == "null" || token == "undefined") {
  alert("please login first....");
  window.location = "../HTML/Login.html";
}

setTimeout(() => {
  let cartDisplay = document.querySelector(".cartDisplay");

if (path == `../HTML/Cart.html` || path == `../HTML/Cart.htmlS`) {
cartDisplay.style.display = "block";
cartDisplay.style.opacity = 1;
}
}, 100);

const apiCall = () => {
  fetch(apiCart)
    .then((res) => res.json())
    .then((res) => {
      allData = res;
      sessionStorage.setItem("cartItems", JSON.stringify(allData));
      showPage(currentPage);
      renderPagination();
    })
    .catch((err) => console.log(err));
};

const appenddata = (data) => {
  const datashow = document.querySelector("#cart_Products");
  const cart_flex = document.createElement("div");
  cart_flex.className = "cart_flex";
  datashow.innerHTML = "";
  cart_flex.innerHTML = "";

  const table = document.createElement("table");
  table.innerHTML = `
      <thead>
        <tr>
          <th>Product</th>
          <th class="quantity">Quantity</th>
          <th class="subtotal">Subtotal</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

  const tbody = table.querySelector("tbody");

  let total = 0;

  data.forEach((el) => {
    const imageContainer = document.createElement("div");
    imageContainer.className = "imageContainer";

    let imgBox = document.createElement("div");
    imgBox.className = "imgBox";

    const price = parseInt(el.price);
    const count = parseInt(el.count);
    const subTotal = price * count;

    total += subTotal;

    imgBox.innerHTML = `
    <img src="${el.img}" alt="Product Image" class="cart_img"/>
      <div class="cart_desc">
            <td><h6>${el.title}</h6></td>
            <td><p class="grid_price">$${el.price}</p></td>
            <div class="button_flex">
            <div class="btn_border1">
              <td>
                <button class="btns neg" onclick="decrementCount(${el.id}, ${
      el.count
    })">-</button>
                <p class="button_count">${el.count}</p>
                <button class="btns pos" onclick="incrementCount(${el.id}, ${
      el.count
    })">+</button>
                </td>
              </div>
            <td>
          <div class="price_delete">
              <p class="1">$${price * count}</p>
            <svg class="delete_img1"  onclick="deleteToCart(${
              el.id
            })" xmlns="http://www.w3.org/2000/svg" class="ct-icon" viewBox="0 0 24 24">
<path d="M9.6,0l0,1.2H1.2v2.4h21.6V1.2h-8.4l0-1.2H9.6z M2.8,6l1.8,15.9C4.8,23.1,5.9,24,7.1,24h9.9c1.2,0,2.2-0.9,2.4-2.1L21.2,6H2.8z"></path>
</svg>
            </div>
          </div>
          </div>


        <div class="btn_border">
              <td>
                <button class="btns neg" onclick="decrementCount(${el.id}, ${
      el.count
    })">-</button>
                ${el.count}
                <button class="btns pos" onclick="incrementCount(${el.id}, ${
      el.count
    })">+</button>
                </td>
              </div>
            <td>
              <p class="grid_price">$${price * count}</p>
            </td>
            <svg class="delete_img"  onclick="deleteToCart(${
              el.id
            })" xmlns="http://www.w3.org/2000/svg" class="ct-icon" viewBox="0 0 24 24">
<path d="M9.6,0l0,1.2H1.2v2.4h21.6V1.2h-8.4l0-1.2H9.6z M2.8,6l1.8,15.9C4.8,23.1,5.9,24,7.1,24h9.9c1.2,0,2.2-0.9,2.4-2.1L21.2,6H2.8z"></path>
</svg>
      `;

    tbody.appendChild(imgBox);
  });

  let overallTotal = allData.reduce((acc, el) => {
    return acc + parseFloat(el.price) * parseInt(el.count);
  }, 0);

  // reduce goes item by item, multiplies price × count, and adds it to a running total.

  const cart_total = document.createElement("div");
  cart_total.className = "cart_total";

  cart_total.innerHTML = `
  <h6>Cart Totals</h6>
  <div class="subTotal">
    <p>Subtotal</p>
    <p>$${overallTotal}</p>
  </div>
  <div class="total">
    <p>Total</p>
    <p class="color">$${overallTotal}</p>
  </div>
  <button class="proceed">Proceed To Checkout</button>
  `;

  cart_flex.append(tbody, cart_total);
  datashow.append(table, cart_flex);
};

const showPage = (page) => {
  let start = (page - 1) * itemsperPage;
  let end = page * itemsperPage;
  let paginatedItems = allData.slice(start, end);

  appenddata(paginatedItems);
};

// Add

const incrementCount = async (id, count) => {
  try {
    await fetch(`${apiCart}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ count: count + 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    updateCartCount();
    apiCall();
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
};

// Decrement

const decrementCount = async (id, count) => {
  if (count <= 1) {
    await fetch(`${apiCart}/${id}`, {
      method: "DELETE",
    });
    apiCall();
    updateCartCount();
    alert(`your items delete id number is ${id}`);
    return;
  }

  try {
    await fetch(`${apiCart}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ count: count - 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    apiCall();
    updateCartCount();
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
};

// Delete Cart

const deleteToCart = async (id) => {
  try {
    await fetch(`${apiCart}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    apiCall();
    updateCartCount();
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
};

const renderPagination = () => {
  const pagination = document.querySelector("#pagination");
  pagination.innerHTML = "";

  let totalPages = Math.ceil(allData.length / itemsperPage);

  // Previous Button

  let prevBtn = document.createElement("button");
  prevBtn.className = "prevBtn";
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
  nextBtn.className = "nextBtn";
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

// Session Storage

window.onload = () => {
  let storedCart = sessionStorage.getItem("cartItems");
  if (storedCart) {
    allData = JSON.parse(storedCart);
    showPage(currentPage);
    renderPagination();
    updateCartCount();
  } else {
    apiCall(); // if nothing stored, fetch from API
  }
};

// Search Function

const searchFunc = async () => {
  const query = document.querySelector("#search").value.trim().toLowerCase();
  if (!query) return;

  try {
    let [searchFetch] = await Promise.all([fetch(apiCart)]);
    const filter = document.querySelector("#filter");
    filter.style.display = "none";
    const pagination = document.querySelector("#pagination");
    pagination.style.display = "none";
    const [data1] = await Promise.all([searchFetch.json()]);

    const filtered = await data1.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
    appenddata(filtered);
    document.querySelector("#search").value = "";
  } catch (err) {
    console.error("Search failed:", err);
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

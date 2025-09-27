let apiCart = "https://weather-app-6du4.onrender.com/cart";

let allData = [];
let currentPage = 1;
let itemsperPage = 5;

const apiCall = () => {
  fetch(apiCart)
    .then((res) => res.json())
    .then((res) => {
      allData = res;
      showPage(currentPage);
      renderPagination();
    })
    .catch((err) => console.log(err));
};

const appenddata = (data) => {
  const datashow = document.querySelector("#cart_Products");
  datashow.innerHTML = "";

  const table = document.createElement("table");
  table.innerHTML = `
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

  const tbody = table.querySelector("tbody");

  data.forEach((el) => {
    const imageContainer = document.createElement("div");
    imageContainer.className = "imageContainer";

    let imgBox = document.createElement("div");
    imgBox.className = "imgBox";

    const price = parseInt(el.price);
    const count = parseInt(el.count);

    imgBox.innerHTML = `
    <img src="${el.img}" alt="Product Image" class="cart_img"/>
      <div class="cart_desc">
            <td><h6>${el.title}</h6></td>
            <td>$${el.price}</td>
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
            <td><p>$${price * count}</p></td>
            <svg class="delete_img"  onclick="deleteToCart(${
              el.id
            })" xmlns="http://www.w3.org/2000/svg" class="ct-icon" viewBox="0 0 24 24">
<path d="M9.6,0l0,1.2H1.2v2.4h21.6V1.2h-8.4l0-1.2H9.6z M2.8,6l1.8,15.9C4.8,23.1,5.9,24,7.1,24h9.9c1.2,0,2.2-0.9,2.4-2.1L21.2,6H2.8z"></path>
</svg>
      `;
    tbody.appendChild(imgBox);
    datashow.append(table, tbody);
  });
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

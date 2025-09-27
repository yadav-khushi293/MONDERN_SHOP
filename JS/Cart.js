let apiCart = "https://weather-app-6du4.onrender.com/cart";

let allData = [];
let currentPage = 1;
let itemsperPage = 8;

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
  console.log("Data received in appenddata:", data);

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

    imgBox.innerHTML = `
    <img src="${el.img}" alt=""/>
            <td>${el.title}</td>
            <td>₹${el.price}</td>
            <td>
                <button class="btns neg" onclick="decrementCount(${el.id}, ${
      el.quantity
    })">-</button>
                ${el.quantity}
                <button class="btns pos" onclick="incrementCount(${el.id}, ${
      el.quantity
    })">+</button>
            </td>
            <td>₹${el.price * el.quantity}</td>
            <img src="../Utils/Delete.svg" />
      `;
    tbody.appendChild(imgBox);
  });
};

const showPage = (page) => {
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

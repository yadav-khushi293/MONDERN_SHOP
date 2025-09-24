let api = "https://weather-app-6du4.onrender.com/shop";

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
    price.innerHTML = item.price;

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
    price1.innerHTML = item.price;

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
    text.innerHTML = el.title;
    price.innerHTML = el.price;
    category.innerHTML = el.category;
    cart.innerHTML = "Add To Cart";

    imgBox.append(image, text, price, category, cart);
    imageContainer.append(imgBox);
    datashow.append(imageContainer);
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

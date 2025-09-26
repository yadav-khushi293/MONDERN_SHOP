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
  const datashow = document.querySelector("#cart_Products");
  datashow.innerHTML = "";

  data.forEach((el) => {
    const imageContainer = document.createElement("div");
    imageContainer.className = "imageContainer";

    let imgBox = document.createElement("div");
    imgBox.className = "imgBox";

    imgBox.innerHTML = `
      <div class="">

      </div>
      `;
  });
};

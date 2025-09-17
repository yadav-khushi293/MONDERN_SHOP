let api = "https://weather-app-6du4.onrender.com/shop";

const apiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appenddata(res))
    .catch((err) => console.log(err));
};

const appenddata = (data) => {
  const datashow = document.querySelector("#product");
  const popularProducts = document.querySelector("#popular_products");

  let product = data.slice(3, 7);

  const imageContainer = document.createElement("div");
  imageContainer.className = "imageContainer";

  for (let i = 3; i <= 6 && i < data.length; i++) {
    let item = data[i];

    let imgBox = document.createElement("div");
    let image = document.createElement("img");
    let text = document.createElement("h5");
    let price = document.createElement("p");
    let category = document.createElement("p");
    let cart = document.createElement("button");

    imgBox.className = "imgbox";
    category.className = "category";

    image.src = item.img;
    text.innerHTML = item.title;
    price.innerHTML = item.price;
    category.innerHTML = item.category;
    cart.innerText = "Add To Cart";

    imgBox.append(image, text, price, category, cart);
    imageContainer.append(imgBox);
  }

  datashow.append(imageContainer);

  const imageContainer1 = document.createElement("div");

  product.forEach((el) => {
    let imgBox1 = document.createElement("div");
    let image1 = document.createElement("img");
    let text1 = document.createElement("h5");
    let price1 = document.createElement("p");
    let category1 = document.createElement("p");
    let cart1 = document.createElement("button");

    imageContainer1.className = "imageContainer1";
    imgBox1.className = "imgbox1";
    category1.className = "category1";

    image1.src = el.img;
    text1.innerHTML = el.title;
    price1.innerHTML = el.price;
    category1.innerHTML = el.category;
    cart1.innerText = "Add To Cart";

    imgBox1.append(image1, text1, price1, category1, cart1);
    imageContainer1.append(imgBox1);
  });
  popularProducts.append(imageContainer1);
};

// Hiding Iframe Tag

let playButton = document.getElementById("playButton");
let iframeWrapper = document.getElementById("iframeWrapper");
let iframe = document.getElementById("videoFrame");
let closeBtn = document.getElementById("closeBtn");

playButton.addEventListener("click", function () {
  iframeWrapper.style.display = "block"; // show iframe with close button
  iframe.src += "&autoplay=1"; // autoplay
  playButton.style.display = "none"; // hide play button
});

closeBtn.addEventListener("click", function () {
  iframeWrapper.style.display = "none"; // hide iframe
  iframe.src = iframe.src.replace("&autoplay=1", ""); // stop video
  playButton.style.display = "block"; // show play button again
});

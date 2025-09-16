let api = "https://weather-app-6du4.onrender.com/shop";

const apiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appenddata(res))
    .catch((err) => console.log(err));
};

const appenddata = (data) => {
  const datashow = document.querySelector("#product");

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
};

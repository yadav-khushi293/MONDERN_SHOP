 const api=`https://weather-app-6du4.onrender.com/shop`
 
 const ApiCall=()=>{
    fetch(api)
    .then((res) => res.json())
    .then((res) => appenddata(res))
    .catch((err) => console.log(err));
 }
const appenddata = (data) => {

//Code-1  
    const datashow = document.getElementById('simple_product');
    let el = data[6]; 

    let maindiv = document.createElement('div');
    let imgdiv = document.createElement('div');
    let imgmain_div=document.createElement('div');
    let informationdiv = document.createElement('div');
    let title = document.createElement('h3');
    let price = document.createElement('div');
    let description = document.createElement('div');
    let category = document.createElement('div');

    maindiv.classList ="maindiv"
    informationdiv.className="informationdiv"
    title.className="title_1"
    price.className="price_1"
    description.className="description_1"
    category.classList="category_1"
    imgmain_div.classList="imgmain_div"

    title.innerText = el.title;
    price.innerHTML = el.price;
    description.innerHTML = el.description;
    category.innerHTML = `Category: <span class="Category_span">${el.category}</span>`;


//Code-2(thumbail-img_Code)    
 const API_URL = `https://weather-app-6du4.onrender.com/external`;

const pagi = document.createElement("div");
const mainDiv = document.createElement("div");
const thumbsDiv = document.createElement("div");

pagi.className = "pagi";
mainDiv.className = "main";
thumbsDiv.className = "thumbs";

let currentIndex = 0;

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    const leftArrow = document.createElement("div");
    const rightArrow = document.createElement("div");

    leftArrow.className = "arrow left";
    rightArrow.className = "arrow right";
    leftArrow.innerHTML = "&#10094;";  // ←
    rightArrow.innerHTML = "&#10095;"; // →

    // Wrapper for sliding images
    const sliderWrapper = document.createElement("div");
    sliderWrapper.className = "slider-wrapper";

    // Create all images inside sliderWrapper
    data.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.className = "slider-image";
      sliderWrapper.appendChild(img);

      // Thumbnail click handler
      const thumb = document.createElement("img");
      thumb.src = src;
      thumb.className = "thumb-image";

      thumb.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
      });

      thumbsDiv.appendChild(thumb);
    });

    mainDiv.appendChild(leftArrow);
    mainDiv.appendChild(sliderWrapper);
    mainDiv.appendChild(rightArrow);

    // Update slider position
    const updateSlider = () => {
      // Calculate translateX based on currentIndex
      const width = sliderWrapper.children[0].clientWidth;
      sliderWrapper.style.transform = `translateX(${-currentIndex * width}px)`;
      // Highlight current thumbnail (optional)
      Array.from(thumbsDiv.children).forEach((thumb, idx) => {
        thumb.style.opacity = idx === currentIndex ? "1" : "0.5";
      });
    };

    leftArrow.addEventListener("click", () => {
      currentIndex--;
      if (currentIndex < 0) currentIndex = data.length - 1;
      updateSlider();
    });

    rightArrow.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex >= data.length) currentIndex = 0;
      updateSlider();
    });

    // Initial setup
    updateSlider();

  })
  .catch(err => {
    console.error("API Error:", err);
  });

//End Code

const skeletonCard = document.createElement('div'); 
skeletonCard.classList.add('card_div');

skeletonCard.innerHTML = `
    <div class="info1">
        
    <div class="add_button_1">
     <button class="add_card">-</button>
     <p class="count">1</p>
     <button class="add_card">+</button>
    
    </div>

     <button class="add_button_2"> Add To Cart</button>
    </div>
    <hr>
`;



pagi.append(mainDiv,thumbsDiv);
 informationdiv.append(title, price, category, description,skeletonCard);
    imgdiv.append(pagi);
    imgmain_div.append(imgdiv);
    maindiv.append(imgmain_div, informationdiv);
    datashow.append(maindiv);


const description_text = document.createElement('div'); // Ye line add karni zaroori hai agar aapne pehle declare nahi kiya
description_text.classList.add('card_div');

description_text.classList="description_text"

description_text.innerHTML = `

    <h1 class="heading_1">DISCRIPTION</h1>
    <div class="description_text_1">
    <div class="p1">Morbi tincidunt ornare massa eget egestas purus viverra. In vitae turpis massa sed elementum tempus egestas sed. Euismod in pellentesque massa placerat duis ultricies. Justo donec enim diam vulputate ut pharetra sit. At auctor urna nunc id cursus metus aliquam eleifend. Ipsum nunc aliquet bibendum enim. Et malesuada fames ac turpis egestas sed tempus.</div>

    <div class="p2">Nisi scelerisque eu ultrices vitae auctor. Sodales ut etiam sit amet nisl purus in mollis. Turpis tincidunt id aliquet risus. Aliquet sagittis id consectetur purus.</div>
    </div>

    <h3 class="hading_3">Related products</h3>
`;

datashow.append(description_text);




// ----------  New: Show next 6 images only ----------
    const imageContainer = document.createElement('div');

    for (let i = 9; i <=13  && i < data.length; i++) {
        let item = data[i];
        
        let maindiv_1=document.createElement('div')
        let imgBox = document.createElement('div');
        let image = document.createElement('img');
        let title=document.createElement('div');
        let price=document.createElement('div');
        let category=document.createElement('div');

        imgBox.className="imgBox";
        image.classList="img_2";
        title.classList="title_2";
        price.classList="price_2";
        category.classList="category_2"
        
       imageContainer.classList="imageContainer"


        title.innerHTML=item.title;
        price.innerHTML=item.price;
        category.innerHTML=`Category: <span class="Category_span_1">${el.category}</span>`;
        image.src = item.img;

        const simplepro_add_button = document.createElement('div'); 
    //    simplepro_add_button.classList.add('card_div');

       simplepro_add_button.innerHTML = `

       <button class="siple_pro_btn" type="sumbit">Add to Card</button>
`;

        imgBox.append(image,title,price,category,simplepro_add_button);
        imageContainer.append(imgBox);
    }
    datashow.append(imageContainer);

};



 const api=`https://weather-app-6du4.onrender.com/shop`
 
 const ApiCall=()=>{
    fetch(api)
    .then((res) => res.json())
    .then((res) => appenddata(res))
    .catch((err) => console.log(err));
 }
const appenddata = (data) => {

      
    const datashow = document.getElementById('simple_product');

    let el = data[8]; 

    let maindiv = document.createElement('div');
    let imgdiv = document.createElement('div');
    let informationdiv = document.createElement('div');
    let title = document.createElement('h3');
    let img = document.createElement('img');
    let price = document.createElement('div');
    let description = document.createElement('div');
    let category = document.createElement('div');

    img.className="img_1";
    maindiv.classList ="maindiv"
    informationdiv.className="informationdiv"
    title.className="title_1"
    price.className="price_1"
    description.className="description_1"
    category.classList="category_1"


    title.innerText = el.title;
    img.src = el.img;
    price.innerHTML = el.price;
    description.innerHTML = el.description;
    category.innerHTML = `Category: <span class="Category_span">${el.category}</span>`;

   

    
const skeletonCard = document.createElement('div'); // Ye line add karni zaroori hai agar aapne pehle declare nahi kiya
skeletonCard.classList.add('card_div');

skeletonCard.innerHTML = `
    <div class="info1">
        
    <div class="add_button_1">
     <button class="add_card">-</button>
     <p class="count">1</p>
     <button class="add_card">+</button>
    
    </div>

     <button class="add_button_2"> Add To Card</button>
    </div>
    <hr>
`;

 informationdiv.append(title, price, category, description,skeletonCard);
    imgdiv.append(img);
    maindiv.append(imgdiv, informationdiv);
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

    for (let i =6; i <=9  && i < data.length; i++) {
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


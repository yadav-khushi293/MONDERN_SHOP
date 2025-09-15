 const api=`https://weather-app-6du4.onrender.com/shop`
 
 const ApiCall=()=>{
    fetch(api)
    .then((res) => res.json())
    .then((res) => appenddata(res))
    .catch((err) => console.log(err));
 }
const appenddata = (data) => {
    const datashow = document.getElementById('info');

    let el = data[0]; 

    let maindiv = document.createElement('div');
    let imgdiv = document.createElement('div');
    let informationdiv = document.createElement('div');
    let title = document.createElement('h3');
    let img = document.createElement('img');
    let price = document.createElement('p');
    let description = document.createElement('p');
    let category = document.createElement('p');

    title.innerText = el.title;
    img.src = el.img;
    price.innerHTML = el.price;
    description.innerHTML = el.description;
    category.innerHTML = `Category: ${el.category}`;

    informationdiv.append(title, price, category, description);
    imgdiv.append(img);
    maindiv.append(imgdiv, informationdiv);
    datashow.append(maindiv);

    // ----------  New: Show next 6 images only ----------
    const imageContainer = document.createElement('div');

    for (let i = 5; i <=9  && i < data.length; i++) {
        let item = data[i];

        let imgBox = document.createElement('div');
        let image = document.createElement('img');

        image.src = item.img;

        imgBox.append(image);
        imageContainer.append(imgBox);
    }

    datashow.append(imageContainer);

// const skeletonCard = document.createElement('div'); // Ye line add karni zaroori hai agar aapne pehle declare nahi kiya
// skeletonCard.classList.add('card_div');

// skeletonCard.innerHTML = `
//     <div class="info1">
//         <img src=""
//     </div>
// `;

// datashow.appendChild(skeletonCard);

};


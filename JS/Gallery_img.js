const api = `https://weather-app-6du4.onrender.com/shop`;

const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appenddata(res))
    .catch((err) => console.log(err));
};

const appenddata = (data) => {
  const main_div = document.getElementById('simple_product');
  main_div.classList.add('masonry_container');

  const sizeClasses = ['img_small', 'img_medium', 'img_large'];

  data.forEach((el, i) => {
    const img_div = document.createElement('div');
    const img = document.createElement('img');

    img.classList.add('img_1');

    // ✅ Fixed size based on index
    const fixedSize = sizeClasses[i % sizeClasses.length];
    img.classList.add(fixedSize);

    img.src = el.img;

    img_div.classList.add('img_div');
    img_div.appendChild(img);
    main_div.appendChild(img_div);
  });

 
};
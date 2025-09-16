export const Navbar = () => {
  return `
        <div class="main_parent">
            <div class="parent_child1">
                <div class="child1">
                    <?xml version="1.0"
                    encoding="iso-8859-1"?>
                    <svg class="icon facebook"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 30 30" width="90px" height="90px"><path
                            d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
                    </svg>
                    <?xml version="1.0" encoding="iso-8859-1"?>
                    <svg class="icon twitter" version="1.1" baseProfile="basic"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                        y="0px" viewBox="0 0 30 30"
                        xml:space="preserve">
                        <g>
                            <path style="fill-rule:evenodd;clip-rule:evenodd;"
                                d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2
		V6C26,4.895,25.105,4,24,4z M17.043,21l-2.987-4.269L10.37,21H8.894l4.507-5.206L8.648,9h4.612l2.691,3.847L19.282,9h1.45
		l-4.128,4.781L21.655,21H17.043z" />
                            <polygon
                                style="fill-rule:evenodd;clip-rule:evenodd;"
                                points="10.878,10.184 17.633,19.811 19.421,19.811 12.666,10.184 	" />
                        </g>
                    </svg>
                    <?xml version="1.0" encoding="iso-8859-1"?>
                    <svg class="icon instagram"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 30 30" width="90px"
                        height="90px"><g><circle cx="15" cy="15" r="4" /><path
                                d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" /></g>
                    </svg>
                </div>
                <div class="child2">
                    <img src="../Utils/Logo.svg" alt="Company Logo">
                </div>
                <div class="child3">
                    <input type="text" name="search" id="search">
                    <?xml version="1.0" standalone="no"?>
                    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
                    <svg class="icon profile" version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt" height="512.000000pt"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g
                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="currentColor" stroke="none">
                            <path
                                d="M2370 5113 c-371 -35 -653 -114 -961 -269 -245 -122 -444 -268 -655
-478 -224 -225 -366 -423 -500 -701 -158 -326 -237 -650 -251 -1020 -15 -426
73 -832 263 -1214 133 -269 271 -459 488 -677 221 -220 412 -357 681 -489 188
-92 309 -137 500 -185 500 -126 1002 -102 1490 71 149 53 407 182 540 271 299
199 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124
250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255
-102 9 -333 11 -415 3z m545 -342 c634 -107 1171 -457 1523 -995 170 -258 286
-563 339 -891 24 -153 24 -497 0 -650 -34 -206 -98 -421 -182 -610 -36 -80
-147 -276 -153 -270 -3 3 -16 47 -29 97 -121 468 -455 910 -872 1156 -53 31
-97 57 -99 58 -2 1 17 30 41 65 378 543 188 1310 -401 1617 -123 64 -226 99
-349 117 -489 74 -954 -169 -1177 -612 -178 -356 -146 -795 81 -1122 24 -35
43 -64 41 -65 -2 -1 -46 -27 -99 -58 -415 -245 -740 -671 -865 -1133 -14 -55
-28 -107 -31 -115 -10 -33 -155 241 -222 422 -47 125 -92 299 -118 453 -25
152 -25 495 0 650 105 647 447 1183 983 1541 306 205 675 333 1054 368 108 10
418 -4 535 -23z m-165 -634 c207 -57 368 -172 481 -345 88 -134 124 -258 124
-432 0 -226 -75 -408 -231 -564 -156 -156 -338 -231 -564 -231 -226 0 -408 75
-564 231 -156 156 -231 338 -231 564 0 175 36 297 125 434 118 181 302 305
520 352 80 17 262 12 340 -9z m-690 -1774 c332 -165 672 -165 1004 2 l130 65
73 -36 c231 -111 468 -320 618 -544 150 -224 237 -468 267 -746 l11 -105 -34
-36 c-63 -66 -224 -195 -334 -268 -269 -179 -574 -297 -910 -352 -154 -24
-497 -24 -650 0 -459 75 -871 274 -1199 579 l-79 73 11 107 c23 213 73 391
160 565 127 252 305 457 531 612 84 57 260 154 271 149 3 -2 61 -31 130 -65z" />
                        </g>
                    </svg>
                    <?xml version="1.0" standalone="no"?>
                    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
                    <svg class="icon cart" version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1024.000000pt" height="1024.000000pt"
                        viewBox="0 0 1024.000000 1024.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g
                            transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                            fill="currentColor" stroke="none">
                            <path
                                d="M4910 8010 c-273 -59 -525 -239 -662 -473 -100 -172 -127 -273 -138
-522 -5 -110 -9 -201 -9 -202 -1 -2 -189 -3 -418 -3 -415 0 -417 0 -449 -22
-52 -36 -51 -30 -85 -403 -5 -60 -14 -148 -19 -195 -5 -47 -16 -161 -25 -255
-8 -93 -22 -235 -30 -315 -8 -80 -22 -217 -30 -305 -8 -88 -23 -252 -34 -365
-11 -113 -25 -254 -31 -315 -6 -60 -17 -175 -25 -255 -20 -191 -32 -321 -45
-455 -15 -159 -50 -525 -60 -630 -37 -367 -41 -436 -35 -505 25 -291 251 -529
540 -569 107 -15 3414 -15 3522 0 208 28 392 159 482 342 73 150 83 236 56
502 -9 83 -24 238 -35 345 -11 107 -34 337 -50 510 -37 389 -91 946 -131 1350
-47 480 -68 703 -84 870 -9 85 -20 200 -25 255 -37 379 -30 349 -83 389 l-34
26 -419 2 -419 3 -6 190 c-6 188 -12 227 -54 350 -78 227 -257 436 -479 560
-186 103 -468 142 -686 95z m320 -235 c172 -26 309 -94 430 -215 80 -80 132
-157 174 -263 41 -102 50 -161 50 -327 l1 -155 -765 0 -765 0 1 160 c0 180 14
252 70 370 105 223 316 385 560 429 103 19 130 19 244 1z m1588 -1220 c7 -3
12 -23 12 -54 0 -28 4 -83 10 -123 5 -40 16 -145 25 -233 8 -88 20 -203 25
-255 5 -52 17 -165 25 -250 23 -222 44 -430 55 -540 5 -52 17 -169 25 -260 8
-91 28 -302 45 -470 16 -168 36 -381 45 -475 8 -93 22 -233 30 -310 7 -77 18
-189 24 -250 6 -60 18 -182 27 -270 22 -215 17 -302 -24 -381 -40 -78 -132
-164 -209 -196 l-58 -23 -1760 0 -1760 0 -66 32 c-81 40 -152 109 -191 187
-45 88 -46 155 -9 531 17 176 38 392 46 480 36 389 66 711 80 840 14 138 25
251 45 455 11 115 39 403 70 720 11 113 25 255 31 315 5 61 14 146 19 190 5
44 14 136 20 205 6 69 13 130 14 135 3 10 3376 10 3404 0z" />
                            <path
                                d="M4280 6007 c-20 -7 -44 -27 -58 -47 l-23 -35 3 -430 c4 -406 5 -434
26 -510 31 -111 58 -177 113 -270 49 -84 168 -213 246 -266 72 -50 192 -106
288 -135 79 -23 108 -27 240 -28 129 -1 161 2 229 22 384 111 640 408 685 797
6 50 11 248 11 441 0 347 -4 400 -35 430 -51 51 -155 44 -192 -13 -16 -25 -18
-65 -23 -463 -5 -417 -7 -437 -28 -495 -36 -98 -70 -159 -128 -229 -139 -169
-341 -257 -559 -243 -171 11 -298 69 -425 197 -69 68 -94 102 -127 170 -71
147 -73 164 -73 621 0 382 -1 406 -20 436 -31 51 -90 71 -150 50z" />
                        </g>
                    </svg>
                    <div class="battery">
                        <div class="battery_box">
                            <div class="battery_level" id="level"></div>
                            <div class="battery_tip"></div>
                        </div>
                        <div class="battery_info" id="info">Checking Battery
                            Status...</div>
                    </div>
                </div>
            </div>
            <div class="parent_child2">
                <ul class="navbar_ul">
                    <li class="homePage nav-link">Home</li>
                    <select name="Shop" id="shop" class="shopPage nav-link">
                        <option value="shop">Shop</option>
                        <option value="right">Right Sidebar</option>
                        <option value="left">Left Sidebar</option>
                    </select>
                    <select name="Products" id="products" class="productPage nav-link">
                        <option value="product">Products</option>
                        <option value="simple">Simple Product</option>
                        <option value="variable">Variable Product</option>
                        <option value="grouped">Grouped Product</option>
                        <option value="external">Extrenal Product</option>
                        <option value="account">My Account</option>
                    </select>
                    <li class="aboutPage nav-link">About</li>
                    <li class="contactPage nav-link">Contact</li>
                </ul>
            </div>
        </div>
        `;
};

export const NavStyle = () => {
  return `
 .main_parent {
  padding: 20px 70px;
  background-color:#f4f4f4;
  padding-bottom:0;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 21px;
  height: 21px;
  object-fit: cover;
  fill: #000;
  transition: color 0.2s ease;
}

.cart {
  width: 31px;
  height: 31px;
  transition: color 0.2s ease;
}

.icon:hover,
.cart:hover {
  fill: #f6bf54;
}

.child1,
.child3,
.parent_child1,
.parent_child2,
.navbar_ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

.parent_child1 {
  justify-content: space-between;
  margin: auto;
  border-bottom: 1px solid rgb(222, 220, 220);
}

.child1 {
  gap: 20px;
}

.child3 {
  gap: 17px;
}

.child2 > img {
  width: 200px;
  height: 100px;
  object-fit: fill;
  margin-left: 55%;
}

.child1:hover,
.child2:hover,
.child3:hover {
  cursor: pointer;
}

.parent_child2 {
  padding: 20px 0;
  margin: auto;
}

.navbar_ul,
li {
  list-style: none;
  gap: 30px;
  font-size: 17px;
  font-weight: 700;
  opacity: 0.8;
}

li:hover,
select:hover {
  color: #fda901ff;
  cursor: pointer;
}

select {
  border: none;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  opacity: 0.8;
  background-color:#f4f4f4;
}

/* Battery Css */

.battery {
  display: flex;
  justify-content: center;
  gap: 5px;
  padding-top: 15px;
}

.battery_box {
  border: 3px solid #000;
  width: 35px;
  height: 15px;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  margin-bottom: 15px;
}

.battery_level {
  height: 100%;
  width: 0%;
  background-color: green;
  transition: width 0.5s ease;
}

.battery_tip {
  width: 10px;
  height: 30px;
  background-color: green;
  border-radius: 3px;
  position: absolute;
  right: -15px;
  top: 10px;
}

.battery_info {
  padding-top: 1.5px;
  font-size: 9px;
  font-weight: 600;
}

input::placeholder {
  font-size: 13px;
  padding: 0 10px;
  font-weight: 700;
}

.nav-link.active {
  color: #f8a705ff;   /* highlight like hover */
  opacity: 1;
}

#search{
border:2px solid;
border-radius:20px;
height:35px;
padding: 0 10px;
}

#search:hover{
border: 2px solid #f8a705ff;
}
 `;
};

// 🔍 Placeholder Typing + Blinking Cursor

let text = "🔍  Search For What You Want...";
let input;
let i = 0;
let cursorVisible = true;
let typing;
let interval;

function updatePlaceholder() {
  if (!input) return;
  let displayed = text.substring(0, i);
  if (cursorVisible) {
    input.setAttribute("placeholder", displayed + "|");
  } else {
    input.setAttribute("placeholder", displayed + " ");
  }
}

function typeAndBlink() {
  // Blink cursor while typing
  typing = setInterval(() => {
    cursorVisible = !cursorVisible;
    updatePlaceholder();
  }, 100);

  function typeChar() {
    if (!input) return;
    if (i <= text.length) {
      updatePlaceholder();
      i++;
      setTimeout(typeChar, 100);
    } else {
      clearInterval(typing);
      startBlinkAtEnd();
    }
  }
  typeChar();
}

function startBlinkAtEnd() {
  interval = setInterval(() => {
    cursorVisible = !cursorVisible;
    let displayed = text;
    if (cursorVisible) {
      input.setAttribute("placeholder", displayed + "|");
    } else {
      input.setAttribute("placeholder", displayed + " ");
    }
  }, 500);

  // Restart typing loop after pause
  setTimeout(() => {
    clearInterval(interval);
    i = 0;
    cursorVisible = true;
    typeAndBlink();
  }, 2500);
}

export const typePlaceholder = () => {
  input = document.querySelector("#search");
  if (!input) return;
  // Clear old intervals if any
  clearInterval(typing);
  clearInterval(interval);
  i = 0;
  cursorVisible = true;
  typeAndBlink();
};

// Display Device Battery

navigator.getBattery().then(function (battery) {
  function updateBattery() {
    const level = Math.floor(battery.level * 100);
    document.getElementById("level").style.width = level + "%";
    document.getElementById("info").innerText = `${level}% ${
      battery.charging ? "Charging" : ""
    }`;
  }
  updateBattery();

  // Listen For Changes
  battery.addEventListener("levelchange", updateBattery);
  battery.addEventListener("chargingchange", updateBattery);
});

function getBasePath(path) {
  // remove "index.html" if it exists anywhere
  path = path.replace("index.html", "");

  // find where "/pages/" starts
  let index = path.indexOf("/pages/");

  if (index !== -1) {
    // keep everything before "/pages/"
    path = path.substring(0, index);
  }

  // ✅ normalize multiple slashes to a single slash
  path = path.replace(/\/{2,}/g, "/");

  // ✅ always ensure trailing slash
  if (!path.endsWith("/")) {
    path += "/";
  }

  return path;
}

let fullPath = window.location.pathname;

let basePath = getBasePath(fullPath);

export const aboutPage = () => {
  window.location.pathname = `${basePath}pages/about.html`;
};

export const goHome = () => {
  window.location.pathname = `${basePath}index.html`;
};

export const contactPage = () => {
  window.location.pathname = `${basePath}pages/contact.html`;
};

export const shopPage = () => {
  window.location.pathname = `${basePath}pages/shop.html`;
};

export const productPage = () => {
  window.location.pathname = `${basePath}pages/product.html`;
};
// Highlight Active Nav Item
export const setActiveNav = () => {
  // Get current page name (like index.html, Login.html, Cart.html)
  let currentPage = window.location.pathname.split("/").pop().toLowerCase();

  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  // Select all nav links
  const navItems = document.querySelectorAll(".nav-link");

  navItems.forEach((item) => {
    // reset
    item.classList.remove("active");

    // Match based on text or condition
    if (
      (currentPage === "index.html" && item.classList.contains("homePage")) ||
      (currentPage === "about.html" && item.classList.contains("aboutPage")) ||
      (currentPage === "contact.html" &&
        item.classList.contains("contactPage")) ||
      (currentPage === "shop.html" && item.classList.contains("shopPage")) ||
      (currentPage === "product.html" && item.classList.contains("productPage"))
    ) {
      item.classList.add("active");
    }
  });
};

// Footer

// export const Footers = () => {
//   return `
//     <footer>
//         <div class="footer_cantaner1">
//             <div class="FC_child1">
//                 <div class="FC_child1_box1 Box">
//                     <h2>About Us</h2>
//                     <div class="ulDiv1">
//                         <ul>
//                             <li>About Organization</li>
//                             <li>Our Clients</li>
//                             <li>Our Partners</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="FC_child1_box2 Box">
//                     <h2>Quick Links</h2>
//                     <div class="ulDiv2">
//                         <ul>
//                             <li>Introduction</li>
//                             <li>Organization Team</li>
//                             <li>Press Enquiries</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="FC_child1_box3 Box">
//                     <h2>Important Links</h2>
//                     <div class="ulDiv3">
//                         <ul>
//                             <li>Privacy Policy</li>
//                             <li>Cookies Policy</li>
//                             <li>Terms & Conditions</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="Box">
//                     <h2>Contact Info</h2>
//                     <p>Nunc lobortis mattis aliquam faucibus purus in massa arcu odio ut sem nulla pharetra diam amet.
//                     </p>
//                 </div>
//             </div>
//             <!-- footer cantaner child2 -->
//             <div class="FC_child2">
//                 <div class="Box">
//                     <h2>Achievements</h2>
//                     <div>
//                         <p>Massa sed elementum tempus egestas sed sed risus at ultrices mi tempus imperdiet nulla.</p>
//                     </div>
//                 </div>
//                 <div class="Box">
//                     <h2>Useful Information</h2>
//                     <div>
//                         <p>Amet commodo nulla facilisi nullam vehicula ipsum. Faucibus pulvinar elementum integer enim.
//                         </p>
//                     </div>
//                 </div>
//                 <div class="Box">
//                     <h2>Shipping Imformation</h2>
//                     <div class="paragraph1">
//                         <p>Fringilla urna porttitor rhoncus dolor purus nonulla malesuada pellentesque elit eget.</p>
//                     </div>
//                 </div>
//                 <div class="Box">
//                     <div class="iconDiv">
//                         <div class="img_div">
//                             <i class="fa-solid fa-location-dot"></i>
//                         </div>
//                         <div class="text">
//                          <h3>Address:</h3>
//                             <p>Street Name, NY 38954</p>
//                         </div>
//                     </div>
//                     <div class="iconDiv">
//                         <div class="img_div">
//                         <i class="fa-solid fa-phone"></i>
//                     </div>
//                     <div class="iconText2 text">
//                             <h3>Phone:</h3>
//                     <p>973-475-8462</p>
//                     </div>
//                     </div>
//                     <div class="iconDiv">
//                         <div class="img_div">
//                         <i class="fa-solid fa-envelope"></i>
//                     </div>
//                     <div class="iconText3 text">
//                             <h3>Email:</h3>
//                        <p>Website@gmail.com</p>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </footer>
//     <div class="footer_cantaner2">
//          <p>Copyright © 2025 - WordPress Theme by Creative Themes</p>
//     </div>
//   `;
// };

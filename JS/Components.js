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
                    <svg class="icon profile" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
<svg class="icon cart" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <!-- Rectangle for main bag shape -->
  <rect x="6" y="10" width="20" height="16" rx="2" fill="currentColor"/>
  <!-- Left handle (arc) -->
  <path d="M10 10 a6 6 0 0 1 12 0" fill="none" stroke="currentColor" stroke-width="2"/>
</svg>
        <div class="btn" id="toggleBtn">
            <strong>🌙</strong>
            <strong>☀️</strong>
        </div>
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
  color: #000;
  transition: color 0.2s ease;
}

.icon:hover {
  color: #f6bf54;
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
  text-decoration: underline;
}

select {
  border: none;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
    width: 95px;
    padding: 5px 0;
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

/*scroll arrow*/

html {
  scroll-behavior: smooth;
}

.fas {
  color: #fda901ff;
}

.to-top {
  background: black;
  position: fixed;
  bottom: 16px;
  right: 32px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #fda901ff !important;
  text-decoration: none;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s;
}

.to-top.active {
  bottom: 32px;
  pointer-events: auto;
  opacity: 1;
}
.to-top::after {
  content: "Back to Top";
  position: absolute;
  bottom: 57px;
  right: -17px;
  background: #fda901ff;
  color: #000;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  opacity: 0;
  transform: translateY(5px);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.to-top:hover::after {
  opacity: 1;
  transform: translateY(0);
}

/*Custom scrollbar*/
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background-color: #000;
}
::-webkit-scrollbar-thumb {
  background-color: #fda901ff;
  border-radius: 10px;
}

/* Day-night-mode*/

body {
  background: #f8f8f8;
  color: #000;
  transition: background 0.3s, color 0.3s;
}

body.dark {
  background: #333; /* Dark Mode */
  color: #fff;
}

.btn {
  width: 50px;
  height: 50px;
  background: #fff; /* Light mode button background */
  color: #000;
  font-size: 1.5em;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1), 5px 5px 30px rgba(0, 0, 0, 0.05),
    inset -2px -2px 5px rgba(0, 0, 0, 0.1),
    inset 2px 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.3s, color 0.3s;
}

body.dark .btn {
  background: #000; /* Dark mode button background */
  color: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25), 5px 5px 30px rgba(0, 0, 0, 0.25),
    inset -2px -2px 5px rgba(0, 0, 0, 0.25),
    inset 2px 2px 5px rgba(0, 0, 0, 0.25);
}

.btn strong {
  display: none;
}

/* 🌙 show by default (light mode) */
.btn strong:nth-child(2) {
  display: block;
}

/* ☀ show only in dark mode */
body.dark .btn strong:nth-child(1) {
  display: block;
}

body.dark .btn strong:nth-child(2) {
  display: none;
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

function getBasePath() {
  let path = window.location.pathname;

  // Normalize multiple slashes
  path = path.replace(/\/{2,}/g, "/");

  // Find "HTML" folder
  let index = path.indexOf("/HTML/");
  if (index !== -1) {
    // Keep everything up to "/HTML/"
    path = path.substring(0, index + 6); // "/HTML/"
  } else {
    // Fallback: current folder
    path = "./";
  }

  // Ensure trailing slash
  if (!path.endsWith("/")) {
    path += "/";
  }

  return path;
}

export const aboutPage = () => {
  window.location.pathname = getBasePath() + "about.html";
};

export const goHome = () => {
  window.location.pathname = getBasePath() + "index.html";
};

export const contactPage = () => {
  window.location.pathname = getBasePath() + "contact.html";
};

export const shopPage = () => {
  window.location.pathname = getBasePath() + "shop.html";
};

export const productPage = () => {
  window.location.pathname = getBasePath() + "product.html";
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

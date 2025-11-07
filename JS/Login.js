$(document).ready(function () {
  $(".message ").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  });
});

$(document).ready(function () {
  const $buttons = $(".message");
  const $userForm = $(".login-form");
  const $adminForm = $(".Admin-form");

  $userForm.show();
  $adminForm.hide();
  $buttons.eq(0).addClass("active");

  $buttons.eq(0).click(function () {
    $userForm.show();
    $adminForm.hide();
    $(this).addClass("active");
    $buttons.eq(1).removeClass("active");
  });

  $buttons.eq(1).click(function () {
    $adminForm.show();
    $userForm.hide();
    $(this).addClass("active");
    $buttons.eq(0).removeClass("active");
  });
});

const apiCart = "https://weather-app-6du4.onrender.com/cart";

///vailidation

const validateUserForm = async (e) => {
  e.preventDefault();

  let email = document.getElementById("user_email").value;
  let password = document.getElementById("user_pass").value;

  // Email validation
  if (email == "") {
    document.getElementById("user_email_msg").innerHTML =
      "Please enter your email.";
    return false;
  } else if (email.indexOf("@") <= 0 || !email.includes(".")) {
    document.getElementById("user_email_msg").innerHTML =
      "Invalid email format.";
    return false;
  } else {
    document.getElementById("user_email_msg").innerHTML = "";
  }

  // Password validation
  if (password == "") {
    document.getElementById("user_pass_msg").innerHTML =
      "Please enter your password.";
    return false;
  } else if (password.length < 6 || password.length > 20) {
    document.getElementById("user_pass_msg").innerHTML =
      "Password should be 6-20 characters.";
    return false;
  } else {
    document.getElementById("user_pass_msg").innerHTML = "";
  }

  const apiLogin = `https://weather-app-6du4.onrender.com/user`;

  let userData = {
    email,
    password,
  };

  // try {
  //   let res = await fetch(apiLogin, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userData),
  //   });
  //   let data = await res.json();

  // let token = sessionStorage.getItem("token");

  // if (token) {
  //   alert("you have token please go to home page...");
  //   return;
  // } else if (data.accessToken) {
  //   sessionStorage.setItem("token", JSON.stringify(data.accessToken));
  //   window.location.href = `index.html`;
  // } else if (data === "Cannot find user") {
  //   alert("data coudn't found");
  //   window.location = "Sign_page.html";
  // }

  try {
    let res = await fetch(apiLogin);
    let users = await res.json();

    // check if entered email & password exist
    let foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      sessionStorage.setItem("token", JSON.stringify(foundUser.id));
      window.location.href = `../index.html`;
    } else {
      alert("Invalid email or password!");
    }
  } catch (error) {
    console.log("🚀 ~ error:", error);
    alert("Something went wrong. Please try again later.");
  }
  return true;
};

const updateCartCount = async () => {
  try {
    let res = await fetch(apiCart);
    let cartItems = await res.json();
    document.querySelector("#cart_count").innerText = cartItems.length;
  } catch (err) {
    console.log(err);
  }
};

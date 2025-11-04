function formFunc(e) {
  e.preventDefault();

  let userName = document.getElementById("user").value.trim();
  let userEmail = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let comment = document.getElementById("comment").value.trim();

  // ==== name validation ====

  if (userName == "") {
    document.getElementById("username_msg").innerHTML =
      "please fill the username field";
    document.getElementById("username_msg").style.color = "#dbb107ff";
    return false;
  } else if (userName.length <= 2 || userName > 20) {
    document.getElementById("username_msg").innerHTML =
      "please enter the length between 2 to 20";
    document.getElementById("username_msg").style.color = "#ffcc06";
    return false;
  } else if (!isNaN(userName)) {
    document.getElementById("username_msg").innerHTML =
      "only character are allowed";
    document.getElementById("username_msg").style.color = "#ffcc06";
    return false;
  } else {
    document.getElementById("username_msg").innerHTML = "";
  }

  // ==== email validation ====

  if (userEmail == "") {
    document.getElementById("email_msg").innerHTML =
      "please fill the useremail field";
    document.getElementById("email_msg").style.color = "#ffcc06";
  } else if (userEmail.indexOf("@") <= 0) {
    document.getElementById("email_msg").innerHTML = "@ Invalid position";
    document.getElementById("email_msg").style.color = "#ffcc06";
    return false;
  } else if (
    userEmail.charAt(userEmail.length - 4) != "." &&
    userEmail.charAt(userEmail.length - 3) != "."
  ) {
    document.getElementById("email_msg").innerHTML = "Invalid position";
    document.getElementById("email_msg").style.color = "#ffcc06";
    return false;
  } else {
    document.getElementById("email_msg").innerHTML = "";
  }

  // ==== subject validation ====

  if (subject == "") {
    document.getElementById("subject_msg").innerHTML =
      "please fill the subject field";
    document.getElementById("subject_msg").style.color = "#c09b07ff";
    return false;
  } else {
    document.getElementById("subject_msg").innerHTML = "";
  }

  // ==== subject validation ====

  if (comment == "") {
    document.getElementById("comment_msg").innerHTML =
      "please fill the comment field";
    document.getElementById("comment_msg").style.color = "#ffcc06";
    return false;
  } else {
    document.getElementById("comment_msg").innerHTML = "";
  }
}

// Cart Number

let apiCart = "https://weather-app-6du4.onrender.com/cart";

const updateCartCount = async () => {
  try {
    let res = await fetch(apiCart);
    let cartItems = await res.json();
    document.querySelector("#cart_count").innerText = cartItems.length;
  } catch (err) {
    console.log(err);
  }
};

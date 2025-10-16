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

// Search Function

let api = "https://weather-app-6du4.onrender.com/shop";

const searchFunc = async () => {
  const query = document.querySelector("#search").value.trim().toLowerCase();
  if (!query) return;

  try {
    let [searchFetch] = await Promise.all([fetch(api)]);
    const filter = document.querySelector("#filter");
    filter.style.display = "none";
    const pagination = document.querySelector("#pagination");
    pagination.style.display = "none";
    const [data1] = await Promise.all([searchFetch.json()]);

    const filtered = await data1.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
    appenddata(filtered);
    document.querySelector("#search").value = "";
  } catch (err) {
    console.error("Search failed:", err);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#search");
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") searchFunc();
    });
  }
});

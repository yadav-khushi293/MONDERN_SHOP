 $(document).ready(function(){

   $('.message ').click(function(){
      $('form').animate({height:"toggle", opacity:"toggle"}, "slow")
   })

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


///vailidation

function validateUserForm(e) {
  e.preventDefault();

  let email = document.getElementById("user_email").value;
  let password = document.getElementById("user_pass").value;

  // Email validation
  if (email == "") {
    document.getElementById("user_email_msg").innerHTML = "Please enter your email.";
    return false;
  } else if (email.indexOf("@") <= 0 || !(email.includes("."))) {
    document.getElementById("user_email_msg").innerHTML = "Invalid email format.";
    return false;
  } else {
    document.getElementById("user_email_msg").innerHTML = "";
  }

  // Password validation
  if (password == "") {
    document.getElementById("user_pass_msg").innerHTML = "Please enter your password.";
    return false;
  } else if (password.length < 6 || password.length > 20) {
    document.getElementById("user_pass_msg").innerHTML = "Password should be 6-20 characters.";
    return false;
  } else {
    document.getElementById("user_pass_msg").innerHTML = "";
  }

  alert("User Login Successful");
  return true;
}

function validateAdminForm(e) {
  e.preventDefault();

  let email = document.getElementById("admin_email").value;
  let password = document.getElementById("admin_pass").value;

  // Same validation logic as above
  if (email == "") {
    document.getElementById("admin_email_msg").innerHTML = "Please enter your email.";
    return false;
  } else if (email.indexOf("@") <= 0 || !(email.includes("."))) {
    document.getElementById("admin_email_msg").innerHTML = "Invalid email format.";
    return false;
  } else {
    document.getElementById("admin_email_msg").innerHTML = "";
  }

  if (password == "") {
    document.getElementById("admin_pass_msg").innerHTML = "Please enter your password.";
    return false;
  } else if (password.length < 6 || password.length > 20) {
    document.getElementById("admin_pass_msg").innerHTML = "Password should be 6-20 characters.";
    return false;
  } else {
    document.getElementById("admin_pass_msg").innerHTML = "";
  }

  alert("Admin Login Successful");
  return true;
}

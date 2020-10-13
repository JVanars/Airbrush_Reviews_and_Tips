// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function hamburger() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function readMore() {
  var y = document.getElementById("moreInfo");
  if (y.className === "more") {
    y.className += " additionalInfo";
  } else {
    y.className = "more";
  }
}

function readLess() {
  var z = document.getElementById("readMore");
  if (z.innerHTML === 'Learn More') {
    z.innerHTML = 'Learn Less';
  } else {
    z.innerHTML = 'Learn More';
  }
}

function validateForm() {
  var x = document.forms["contactUs"]["user_name"].value;
  var y = document.forms["contactUs"]["user_email"].value;
  var z = document.forms["contactUs"]["user_message"].value;
  if (x == "" || y == "" || z == "") {
    alert("All present fields must be filled out.");
    return false;
  } else {
    alert("Thank you! Your message has been submitted and we will contact you soon!")
  }
}
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
  var phone = document.getElementById("phone").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("mail").value;
  var message = document.getElementById("message").value;
  var x = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (name == "" || phone == "" || email == "" || message == "") {
    alert("All present fields must be filled out.");
    return false;
  } else {
    if (phone.match(x)) {
      alert(`Thank you, ${name}! Your info has been received and we will contact you soon.`);
      return true;
    } else {
      alert("Not a valid Phone Number");
      return false;
    }
  }
}
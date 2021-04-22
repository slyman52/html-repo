function validateForm() {
  var x = document.forms["myForm"]["user_name"].value;
  var y = document.forms["myForm"]["user_password"].value;

//username validation
  if (x == ""){
    alert("Please insert a username!");
    return false;
  }
  else if (x != "admin"){
    alert("Wrong username!");
    return false;
}
//password validation
if (y == ""){
  alert("Please insert a password!");
  return false;
}
else if (y != "password"){
  alert("Wrong password!");
  return false;
}

}

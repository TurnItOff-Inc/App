function addNew(){
  var website = prompt("Please enter site name", "Name");
  var url = prompt("Please enter site URL", "URL");
  var Date = prompt("Please enter desired end date", "MM/DD/YY");
  if (website != null && Date != null){
    document.getElementById("Web").innerHTML = website;
    document.getElementById("date").innerHTML = Date;
  }
}

function remove(){
  document.getElementById("Web").innerHTML = null;
  document.getElementById("date").innerHTML = null;
}

function goHome(){
  window.location = '';
}
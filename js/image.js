

var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  console.log("test");
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  console.log("test");
}

img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  console.log("test");
}



var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}
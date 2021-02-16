
for(var i = 0; i < document.querySelectorAll(".main_cert_ref").length; i++) {
  var img = document.createElement("img");
  img.className = "main_cert_img";
  img.src = 'img/all/' + i + '.jpg';
  var src = document.querySelectorAll(".main_cert_ref")[i];

  src.appendChild(img);
}

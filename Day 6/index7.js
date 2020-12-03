document.getElementById("showImage").onclick = showImage;

function showImage() {
  var images = [
    {link: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    width: "240",
    height: "160"},
    {link: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    width: "320",
    height: "195"},
    {link: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
    width: "500",
    height: "343"}
];
  
  var random = Math.floor(Math.random() * images.length);
  
  var image = document.createElement("img");
  image.src = images[random].link;
  image.width = images[random].width;
  image.height = images[random].height;
  
  var elImgs = document.getElementsByTagName("img");
  
  if (elImgs.length > 0) {
    document.body.replaceChild(image, elImgs[0]);
  } else {
    document.body.appendChild(image);
  }
}

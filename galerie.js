let data = {
   photo : 'images/caffe.jpg',
   title : 'My caffe'
 };

$(document).ready(function(){
$('#photo').attr('src', data.photo);
$('#title').text(data.title);
// $('#small').attr('src', data.photo);                       //ez nem is kellene,ha az imagesData.forEach-el csinálom,igaz?
});

let currentPhoto = 0;
let imagesData = ['images/caffe.jpg', 'images/breakfast.jpg', 'images/burrito-chicken.jpg', 'images/ham-burger.jpg', 'images/pancake.jpg', 'images/cocktails.jpg', 'images/cocktail.jpg'];
let titleData = ['My caffe', 'Breakfast', 'Burrito-chicken', 'Ham-burger', 'Dessert', 'Cocktails', 'Cocktail'];

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber]);
  $('#title').text(titleData[photoNumber]);
}

$('#right').click(() => {
  if(currentPhoto < 6) {
    currentPhoto++;
  loadPhoto(currentPhoto);
}
});

$('#left').click(() => {
  if(currentPhoto > 0) {
    currentPhoto--;
  loadPhoto(currentPhoto);
}
});

// imagesData.forEach((item, index) => {
//   $('#thumb').append(`<div class="thumbnails img" data-index="${index}">${item.photo} (data-index="${index}")</div>`);    //megmondom őszintén,meg úgy is látod,h másoltam.De nem csak úgy.Azért olvastam is. Annak nem lenne értelme,ha szószerint másolnék. Addig ok,h forEach meg append-el adom hozzá a képeket. De nem jövök rá mit kell beállítani,mert szöveg jön be.
//
// });

 // let data = {                                                   //ezekkel(1-34.sorig) csináltam azt a data változót,amibe elmentettem a képet meg a nevét,hogy innen töltse be,ne html-ből.
 //   photo : 'images/caffe.jpg',                                 //Lehet ezt kell tömbbe tenni és nem a 42. sorban
 //   title : 'My caffe'
 // };

 let data = {
   photo : 'images/breakfast.jpg',
   title : 'Breakfast'
 };
 //
 // let data = {
 //   photo : 'images/burrito-chicken.jpg',
 //   title : 'Burrito-chicken'
 // };
 //
 // let data = {
 //   photo : 'images/ham-burger.jpg',
 //   title : 'Ham-burger'
 // };
 //
 // let data = {
 //   photo : 'images/pancake.jpg',
 //   title : 'Dessert'
 // };
 //
 // let data = {
 //   photo : 'images/cocktails.jpg',
 //   title : 'Cocktails'
 // };
 //
 // let data = {
 //   photo : 'images/cocktail.jpg',
 //   title : 'Cocktail'
 // };

$(document).ready(function(){                                                   //ez kell ahhoz,hogy ki is rakja a képet.
$('#photo').attr('src', data.photo);                                            //a html-ben beállítottam ezt a 2 id-t,így rakta be a képet meg hozzá a címet
$('#title').text(data.title);
});

let currentPhoto = 0;
let imagesData = ['images/caffe.jpg', 'images/breakfast.jpg', 'images/burrito-chicken.jpg', 'images/ham-burger.jpg', 'images/pancake.jpg', 'images/cocktails.jpg', 'images/cocktail.jpg'];

$('#photo').attr('src', imagesData[currentPhoto].photo);

// let currentTitle = 0;
// let titleData = ['My caffe', 'Breakfast', 'Burrito-chicken', 'Ham-burger', 'Dessert', 'Cocktails', 'Cocktail'];
// $('#title').text(titleData[currentTitle].title);

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);

}

loadPhoto(currentPhoto);

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

// loadPhoto(currentPhoto);

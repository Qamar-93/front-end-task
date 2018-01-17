var images =[];
var pictures = document.getElementById('pictures');
(function dom() {
    var searchForm = document.getElementById('main');
    var body = document.getElementsByTagName('body')[0];
    var href = '';
    var number = 1;
    if (searchForm) {
    searchForm.addEventListener('submit', function(event){
      event.preventDefault();
      var text = event.target.firstElementChild.value;
      getPics(text, (err, array) => {
        if(err) return;
        else {
        images = array;
        getPages(text, images, (err, result) => {
           href = document.getElementById('pagNumber');
          if(err) return;
          else {
            var res = newPage(1);
            pictures.innerHTML = res;
              document.getElementById('pag').innerHTML = result;
          }
        });}
      });
    });
  }
})();


function getPics(search, fn) {
  var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags="+search+"&api_key=c48c0eee6d23486475bd28a5cf3d1e43&per_page=100&page=1&format=json&nojsoncallback=%3F";
  request(url, function(error, result) {
  if (error) {
    fn(error);
    return;
  }
  else {
    var acc ='';
        var imagesArray = result.photos.photo.reduce((acc, image) => {
          acc.push({image :"https://c1.staticflickr.com/" + image.farm + "/" + image.server+ "/" + image.id + "_" +image.secret + ".jpg", title: image.title});
          return acc;
        },[]);
        fn(null,imagesArray);
  }
});
}

function getPages(search, images, fn) {
  var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags="+search+"&api_key=c48c0eee6d23486475bd28a5cf3d1e43&per_page=100&page=1&format=json&nojsoncallback=%3F";
  request(url, function(error, result) {
  if (error) {
    fn(error);
    return;
  }
  else {
    var paggination = '';
    var num = result.photos.perpage/10;
    for(i = 1; i<=num; i++)
      paggination += '<a href="#" id = "pagNumber" onclick="newPage('+i+', this)">'+i+'</a>';
    fn(null, paggination);
  }
});
}

function newPage(number, page){
    var result=images.slice((number-1)*10, (number*10));
    imagesArray = result.reduce(function (acc, cur) {
      return acc+=`<img onclick="overlay('${cur.image}')" class="content-img" src="${cur.image}" alt="${cur.title}">`;
    }, '');

      return pictures.innerHTML = imagesArray;
    }

function overlay(image) {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("overlay").innerHTML = `<img class="overlay" src="${image}" alt="overlay">`;
}
function close() {
    alert('qqq');
    document.getElementById("overlay").style.display = "none";
}

function request(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var result = JSON.parse(xhr.responseText);
        cb(null, result);
      } else {
        var errorMessage = xhr.responseText;
        cb("Error " + url + " " + errorMessage);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

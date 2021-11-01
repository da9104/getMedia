// font 
(() => {
    // load local font
      let font = document.createElement('link');
      font.rel = 'stylesheet';
      font.href = 'http://fonts.cdnfonts.com/css/gotham';
     // font.type = 'font/ttf';
     //  font.mimeType = "font/ttf"
      font.onload = () => document.body.classList.add('wf-active');
      document.head.appendChild(font);
 })();
 

var iTunesGenre = async () => {
    try {
            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Origin': 'Origin',
                    'Access-Control-Allow-Origin': 'https://get--media.herokuapp.com',
                    'Access-Control-Allow-Origin': 'get--media.herokuapp.com',
                    'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                    'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS',
                    'Access-Control-Allow-Credentials': 'true'
                }
            }
            const res = await axios.get(`https://itunes.apple.com/search?term=lew&entity=album`, config)
            let text = "";
            for (let i = 0; i < 10; i++) {     
            text += res.data.results[i].primaryGenreName;
        }
        return text;
    }
    catch (e) {
        return "ERROR!"
    }
}

var getGenre = async () => {
    const genres = await iTunesGenre();
    setTimeout(() => {
    document.querySelector('#genre').innerHTML = genres;
    },3)
}

getGenre();


// create a controller named studentController
// defined in itunes_controller.js
// ensure the controller gets the view's scope and the http service.
var iTunesController =  function ($scope, $http) {
    // define the search function called by the form.
    $scope.searchiTunes =  function (artist) {
    // use the jsonp callback function from the $http service this
    // will get around any limitations for cross-domain scripting.
       $http.jsonp('https://itunes.apple.com/search', 
        {
        params: {  
        'data-ype': 'jsonp', 
        'callback': 'JSON_CALLBACK',
        'term': artist
        }
    // returns a promise. when returned, .then perform action..
        }).then(onSearchComplete, onError)
        console.log($scope)
    }
   
    // Get the data out of the response when search succeeds.
    var onSearchComplete = function (response) {
    // the response has a few data elements
    // so we will grab all of that.
    $scope.data = response.data
    // we will also store just the songs into
    // a separate variable for the view to iterate
    $scope.songs = response.data.results
    }
    // if there's an error, store that for viewing.
    var onError = function (reason) {
    $scope.error = reason
    }
   }





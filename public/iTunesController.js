// font 
// (() => {
//     // load local font
//       let font = document.createElement('link');
//       font.rel = 'stylesheet';
//       font.href = 'http://fonts.cdnfonts.com/css/gotham';
//      // font.type = 'font/ttf';
//      //  font.mimeType = "font/ttf"
//       font.onload = () => document.body.classList.add('wf-active');
//       document.head.appendChild(font);
//  })();

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
            for (let i = 0; i < 8; i++) {     
            text += `
            <li id="genres" style="list-style: none; margin: 0 auto; border-radius: 25px; ">
            ${res.data.results[i].primaryGenreName}
            </li>
            `
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
    // var last = $("#genre li:last").after('<li></li>').last()
    // last.append("<button id='listButtonAdd'> Button</button>")
}
getGenre();

var iTunesFront = async () => {
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
            for (let i = 0; i < 5; i++) {     
            text += 
            `
            <div class="front--cards">
              <div id="front--cover" style=flex: 1 0 50%;">
                 <div id="front--artwork">
                 <img src=" ${res.data.results[i].artworkUrl100}" alt="" id="coverimg"/>
                    </div>
                <div>  ${res.data.results[i].artistName} </div>
                <div>  ${res.data.results[i].collectionName} </div>
                <div style="align-self: flex-start; align-content: flex-start; margin-left: 20px; margin-top: 20px; padding: 10px; border-radius:15px; background-color: #C4C4C4;"> 
                &#35; ${res.data.results[i].primaryGenreName} 
                 </div>
                <hr style=" width:250px; margin: 20px 20px;"/>
                  <div stlye="border-top:1px solid gray; display: flex; flex-direction: row;">
                <p>
                 Listen Apple Music
                 <span style="padding: 10px; border-radius:15px; background-color: #21D3A9">
                 &#163; ${res.data.results[i].collectionPrice} <i class="fas fa-chevron-down" id="arrPrice"></i> 
                 </span>
               </p>
               </div>
                 </div>
            </div>
            `
                console.log(res.data.results);
        }
        return text;
    }
    catch (e) {
        return "ERROR!"
    }
}

var getFront = async () => {
    const front = await iTunesFront();
    setTimeout(() => {
    document.querySelector('#front').innerHTML = front;
    },3)
}
getFront();

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
       
       //  console.log($scope)
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

//    $(document).on('click', '#arrPrice', function() {
//      //  console.log("clicked");
//      // alert('?')
//       var $this = $(this),
//          $i = $this.parent().find('> p');
//          $arrow = $('.fa-chevron-down')
//          $i.toggle();
//          if ($('#arrPrice').on('click')) {
//             $arrow.toggleClass("rotate");
//          }
//    });

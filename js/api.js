var apiToken = "?api_key=b07c4b76ddb7f8611ad630286170d29c";

var urlDomain = "https://api.themoviedb.org/3/";


// Issue #3
function mostPopular() {
    var data = fetch(urlDomain + "movie/popular" + apiToken).then(response => response.json());
    console.log(data)
}


function addPopularMoviesCards() {

}



var apiToken = "?api_key=b07c4b76ddb7f8611ad630286170d29c";

var urlDomain = "https://api.themoviedb.org/3/";


// Issue #3
function mostPopular() {
    var data = fetch(urlDomain + "movie/popular" + apiToken).then(response => response.json());
    console.log(data)
}


function moviesToCards(title, movies) {

}
// issue #4
function searchMovie(title, year, adult) {
    var titleQuery = "&query=" + title;
    var yearQuery = "&year=" + year;
    var adultQuery = "&include_adult=" + adult;
    var pageQuery = "&page=1";
    var data = fetch(urlDomain + 'search/movie' + apiToken + titleQuery + pageQuery + adultQuery + yearQuery)
        .then(response => response.json());
    return data;
}


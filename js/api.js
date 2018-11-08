var apiToken = "?api_key=b07c4b76ddb7f8611ad630286170d29c";

var urlDomain = "https://api.themoviedb.org/3/";

// Issue #3
function mostPopular() {
    var data = fetch(urlDomain + "movie/popular" + apiToken)
        .then(response => {

            return response.json();

        });
    // console.log(data);
    return data;

}

function moviesToCards(title, data) {
    var  MoviesContainerElement = document.createElement("section");
    MoviesContainerElement.setAttribute("class", "cards");
    data.then((value)=>{
        console.log('value',value);
        var movies = (value.results).forEach(movieData => {
            // Create html card element from movie argument.
            var posterUrl = movieData.poster_path === null ? 'assets/no-image.gif' : "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movieData.poster_path;
            var movieElement = createCardElement(movieData.title, movieData.release_date.substring(0, 4), posterUrl);
            // Add html card element to MoviesContainerElement.
            MoviesContainerElement.appendChild(movieElement);
        });
        //TODO: Should add element ID.
        document.getElementById("cards-section").innerHTML = "";
        document.getElementById("cards-section").appendChild(MoviesContainerElement);
    })


}
//myNode.childNodes = new Array();

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

function createCardElement(title, year, posterUrl) {
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = "<img class='card-img' src='" + posterUrl + "' alt='The Movie Poster'>" +
        "          <h1 class='card-title'>" + title + " (" + year + ")" +
        "</h1>";
    //document.getElementById("myDIV").appendChild(card);
    return card;
}

function sortNodeList(sortBy, nodes) {
    var nodeArray = [];
    switch(sortBy) {
        case 'AZ':
            nodeArray =  (Array.from(nodes)).sort((a, b) => {
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
                return 0;
            });
            //return
            break;
        case 'year':
            nodeArray = (Array.from(nodes)).sort((a, b) => a.year - b.year);
            break;
        case 'rate':
            nodeArray = (Array.from(nodes)).sort((a, b) => a.vote_avarage - b.vote_avarage);
            break;
        default: return 'error';
    }
    return nodeArray;
}

function nodeArrayToCards(nodeArray){
    var section = document.getElementById("");

    nodeArray.forEach(node => {
        section.appendChild(node);
    });
}

function moviesSectionNodes(){
    return document.getElementById("card-parent-div");

}


document.getElementById("search-btn").addEventListener("click", (event) => {
    var title = document.getElementById("title").value;
    var year = document.getElementById("year").value;
    var adult = document.getElementById("adult").checked;
    if(title != '') {
        moviesToCards('Search Results:', searchMovie(title, year, adult));
    }
    else alert("Title cannot be Empty!")
});



moviesToCards('Most Popular', mostPopular());
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
    var  MoviesContainerElement = document.createElement("div");
    data.then((value)=>{
        console.log('value',value);
        var movies = (value.results).forEach(movieData => {
            // Create html card element from movie argument.
            var posterUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movieData.poster_path;
            var movieElement = createCardElement(movieData.title, movieData.release_date.substring(0, 4), posterUrl);
            // Add html card element to MoviesContainerElement.
            MoviesContainerElement.appendChild(movieElement);
        });
        //TODO: Should add element ID.
        document.getElementById("card-parent-div").innerHTML = "";
        document.getElementById("card-parent-div").appendChild(MoviesContainerElement);
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
    card.innerHTML = "<h1>" + title + " (" + year + ")" + "</h1><img src='" + posterUrl + "'>";
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

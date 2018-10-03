// Initial array for buttons
var topics = ["The Matrix", "Full Metal Jacket", "Step Brothers", "The Hangover", "School of Rock", "Anchorman", "Starship Troopers"];

// Function for displaying movie data
function createButtons() {
  
  $("#gif-buttons").empty();

  for (var i = 0; i < topics.length; i++) {
    //generating buttons for each movie in the topics array
    var a = $("<button>");
    a.addClass("btn btn-primary btn-info btn-md", "movie-btn");
    a.attr("movie-name", topics[i]);
    a.text(topics[i]);
    // Adding the button to the gif-buttons div
    $("#gif-buttons").append(a).append(" ");
  }
}

// Calling the createButtons function to populate intial buttons
createButtons();

// function to create a button from text when button to add is clicked
$("#add-movie-gif").on("click", function (event) {
  event.preventDefault();
  var textInput = $("#movie-name").val().trim();
  topics.push(textInput);
  createButtons(); 
});

// This function creates a button from text when button to add is clicked
$("#add-movie-gif").on("click", function (event) {
  event.preventDefault();
  var textInput = $("#movie-name").val().trim();
  topics.push(textInput);
  createButtons(); 
});


// event listen listener on buttons to query giphy
//May need to seperate
$("button").on("click", function () {

  var movie = $(this).attr("movie-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    movie + "&api_key=LW0YtEVp8ML09kh7sgX7io2v7FFoXBMw&limit=10";

  //Ajax Query
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // handling data from giphy, passing results to html
    .then(function (response) {
      console.log(response);
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating + "  " + "Title: " + results[i].title);
        var movieImage = $("<img>");
        movieImage.attr("src", results[i].images.fixed_height_still.url);
        gifDiv.append(p);
        gifDiv.append(movieImage);
        $("#gif-area").prepend(gifDiv);
      }
    });
});

//Still need to make the newly created button function, 
//right now it breaks the gif returns.
//then I need to do some logic to toggle the state between still 
//and animated when gif is clicked.
//then add bonus omdb response with gifs.
//add download button bonus





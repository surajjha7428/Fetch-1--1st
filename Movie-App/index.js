let searchButton=document.getElementById("search-button");
let movieName=document.getElementById("search-movie");
let finalOutput=document.getElementById("movie-details");
let key = "f2ebb69"


//-------------------------------Function display data ------------------------//

function displayData(data){
    let image=document.createElement("img");
    image.src=data.Poster;
    let title = document.createElement("h2");
    title.innerText=`Title : ${data.Title}`;
    let country= document.createElement("h2");
    country.innerText=`Country : ${data.Country}`;
    let actors= document.createElement("h3");
    actors.innerText=`Actors : ${data.Actors}`;
    let director=document.createElement("h3");
    director.innerText=`Director : ${data.Director}`;
    let writer = document.createElement("h3");
    writer.innerText=`Writer : ${data.Writer}`;
    let year = document.createElement("h4");
    year.innerText=`Year : ${data.Year}`;
    let released= document.createElement("h4");
    released.innerText=`Released : ${data.Released}`
    let runtime= document.createElement("h4");
    runtime.innerText=`Runtime : ${data.Runtime}`;
    let genre= document.createElement("h4");
    genre.innerText=`Genre : ${data.Genre}`;
    let language=document.createElement("h4");
    language.innerText=`Language : ${data.Language}`;
    let awards=document.createElement("h4");
    awards.innerText=`Awards : ${data.Awards}`;
    let plot= document.createElement("p");
    plot.innerText=`Plot :- ${data.Plot}`;
    finalOutput.append(
        image,
        title,
        country,
        actors,
        director,
        writer,
        year,
        released,
        runtime,
        genre,
        language,
        awards,
        plot,
    );
};


// ------------------------ Searech button Function and fetch ()--------------------------//

searchButton.addEventListener("click",function(){
    let movie=movieName.value;

    if (movie ==""){
        alert ("please enter the mobvie name")
        return;
    }

    fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${key}`)
    .then(function(response){
        return response.json ();

    })
    .then(function(data){
        console.log(data);
        displayData(data);

    })
    .catch(function(errorResponse){
        console.log(errorResponse);
        finalOutput.textContent="something went wrong";
    });
    form.style.display="none";
    finalOutput.style.display="block";
    back_button.style.display="block";

});

//------------------------------Back Button Function-------------------------//


let back_button=document.querySelector(".btn")
back_button.addEventListener("click",function(){
    finalOutput.style.display="none";
    form.style.display="block";
    back_button.style.display="none";
    movieName.value= "";
    finalOutput.innerHTML="";
});
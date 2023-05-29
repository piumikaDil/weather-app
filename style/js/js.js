//////////////////////////////////// dark and light mode/////////////////////////////////////////////////////////////
// $(".dark-btn").on("click", () => {
//     $("body").css("backgroundColor", "black")
//     $(".search-input").css("backgroundColor", "black")


// })

// $(".light-btn").on("click", () => {
//     $("body").css("backgroundColor", "white")

// })


/////////////////////////////////////////fetching data//////////////////////////////////////////////////////////////////
const baseURL = 'http://api.weatherapi.com/v1/'
let location1 = $("search-input").val()


$(".btn").on("click", () => {
    getLocation()
    console.log(location1);
    // getCurrentWeathher()
})

const getLocation = () => {
    fetch(`http://api.weatherapi.com/v1/timezone.json?key=e21a55aa67274426b0183102231405&q=${location1}`)
        .then(Response => Response.json())
        .then(data => $(".location").text(data.location.name))
}

const getCurrentWeathher = () => {
    fetch("http://api.weatherapi.com/v1/current.json?key=e21a55aa67274426b0183102231405&q=dambulla")
        .then(Response => Response.json())
        .then(data => console.log(data))
    //   .then(data => console.log(data.current))
}

//////////////////////////////////// dark and light mode/////////////////////////////////////////////////////////////
$(".dark-btn").on("click", () => {
    $("body").css("backgroundColor", "black")
    $(".search-input").css("backgroundColor", "hsl(217, 16%, 22%, 35%)")
    $(".location").css("color", "white")
    $(".location-img").css("color", "white")
    $(".second-sec").css("color", "white")
    $(".card-2").css({
        "backgroundColor": "hsl(217, 16%, 22%, 35%",
        "color": "white"
    })
    $(".card-3").css({
        "backgroundColor": "hsl(217, 16%, 22%, 35%",
        "color": "white"
    })
    $(".card-4").css({
        "backgroundColor": "hsl(217, 16%, 22%, 35%",
        "color": "white"
    })
    $(".capacity").css("color", "white")
    $(".fa-fw").css("color", "white")
    $(".div-last-days").css({ "backgroundColor": "hsl(217, 16%, 22%, 35%)"})
    $(".noti-div").css("backgroundColor", "hsl(217, 16%, 22%, 35%)")
    $(".bell").css("color", "white")
    $(".map-sec").css("color", "white")
    $(".last-day-1-capacity").css("color", "white")
    $(".last-day-1").css("color", "white")
    $(".search-input").css("color", "white")
    $(".icon-search").css("color", "white")


})



$(".light-btn").on("click", () => {
    $("body").css("backgroundColor", "white")
    $(".search-input").css("backgroundColor", "white")
    $(".location").css("color", "black")
    $(".location-img").css("color", "black")
    $(".second-sec").css("color", "black")
    $(".card-2").css({
        "backgroundColor": "hsla(214, 13%, 78%, 0.35)",
        "color": "black"
    })
    $(".card-3").css({
        "backgroundColor": "hsla(214, 13%, 78%, 0.35)",
        "color": "black"
    })
    $(".card-4").css({
        "backgroundColor": "hsla(214, 13%, 78%, 0.35)",
        "color": "black"
    })
    $(".capacity").css("color", "black")
    $(".fa-fw").css("color", "black")
    $(".div-last-days").css({ "backgroundColor": "hsla(214, 13%, 78%, 0.35)" })
    $(".noti-div").css("backgroundColor", "hsla(214, 13%, 78%, 0.35)")
    $(".bell").css("color", "black")
    $(".map-sec").css("color", "black")
    $(".last-day-1-capacity").css("color", "black")
    $(".last-day-1").css("color", "black")
    $(".search-input").css("color", "black")
    $(".icon-search").css("color", "black")



})


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

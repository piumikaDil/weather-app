//////////////////////////////////// dark and light mode/////////////////////////////////////////////////////////////
$(".dark-btn").on("click", () => {
    $("body").css({ "backgroundColor": "black", "transition": "1s" })
    $(".search-input").css({ "backgroundColor": "hsl(217, 16%, 22%, 35%)", "transition": "1s" })
    $(".location").css({ "color": "white", "transition": "1s" })
    $(".location-img").css({ "color": "white", "transition": "1s" })
    $(".second-sec").css({ "color": "white", "transition": "1s" })
    $(".card-2").css({
        "backgroundColor": "hsl(217, 16%, 22%, 35%",
        "color": "white",
        "transition": "1s"
    })
    $(".card-3").css({
        "backgroundColor": "hsl(217, 16%, 22%, 35%",
        "color": "white",
        "transition": "1s"
    })
    $(".card-4").css({
        "backgroundColor": "hsl(217, 16%, 22%, 35%",
        "color": "white",
        "transition": "1s"
    })
    $(".capacity").css({ "color": "white", "transition": "1s" })
    $(".fa-fw").css({ "color": "white", "transition": "1s" })
    $(".div-last-days").css({ "backgroundColor": "hsl(217, 16%, 22%, 35%)", "transition": "1s" })
    $(".noti-div").css({ "backgroundColor": "hsl(217, 16%, 22%, 35%)", "transition": "1s" })
    $(".bell").css({ "color": "white", "transition": "1s" })
    $(".map-sec").css({ "color": "white", "transition": "1s" })
    $(".last-day-1-capacity").css({ "color": "white", "transition": "1s" })
    $(".last-day-1").css({ "color": "white", "transition": "1s" })
    $(".search-input").css({ "color": "white", "transition": "1s" })
    $(".icon-search").css({ "color": "white", "transition": "1s" })


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
    getCurrentDateAndTime()
    getCurrentWeathher()

})

function getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, { weekday: 'long' });
}

let getCurrentDateAndTime = () => {
    let today = new Date().toISOString().slice(0, 10)
    $(".day").text(((getDayName(new Date(today)))))

    $(".time").text((new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false })));

}

const getLocation = () => {
    fetch("http://api.weatherapi.com/v1/timezone.json?key=e21a55aa67274426b0183102231405&q=dambulla")
        .then(Response => Response.json())
        .then(data => {
            $(".location").text(data.location.name)
            $(".country").text("," + data.location.country)


        })
}

const getCurrentWeathher = () => {
    fetch("http://api.weatherapi.com/v1/current.json?key=e21a55aa67274426b0183102231405&q=dambulla")
        .then(Response => Response.json())
        .then(data => {
            $(".current-temp").text(parseInt(data.current.temp_c))
            $(".current-feel").text(data.current.feelslike_c +"°")
            $(".current-humidity").text(data.current.humidity+"%")
            $(".current-wind").text(data.current.wind_kph+" kp/h") 
        })
    //   .then(data => console.log(data.current))
}

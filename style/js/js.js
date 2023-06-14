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
const today = new Date()
const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(today.getDate() - 3);
const baseURL = 'http://api.weatherapi.com/v1/'
let longitude = ""
let latitude = ""
let endDate = today.toISOString().split("T")[0];
let startDate = sevenDaysAgo.toISOString().split("T")[0];

$(document).ready(function () {
    getPosition()
});




$(".btn").on("click", () => {
    console.log(endDate + " " + startDate);
    let location1 = document.getElementById("search-input")
    getSearchLocation(location1)
    getHistoryWeathher(location1)
    getCurrentDateAndTime()
    getCurrentWeathher(location1)
    getForecastWeathher(location1)

})

function getPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");;
    }
}

function showPosition(position) {
    longitude = position.coords.longitude
    latitude = position.coords.latitude


    fetch(`${baseURL}timezone.json?key=e21a55aa67274426b0183102231405&q=${latitude},${longitude}`)
        .then(Response => Response.json())
        .then(data => {
            $(".city").text(data.location.name);
            $(".country").text("," + data.location.country)
        })

    fetch(`${baseURL}current.json?key=e21a55aa67274426b0183102231405&q=${latitude},${longitude}`)
        .then(Response => Response.json())
        .then(data => {
            $(".current-temp").text(parseInt(data.current.temp_c))
            $(".current-feel").text(data.current.feelslike_c + "°")
            $(".current-humidity").text(data.current.humidity + "%")
            $(".current-wind").text(data.current.wind_kph + " kp/h")
        })

    fetch(`${baseURL}history.json?key=e21a55aa67274426b0183102231405&q=${latitude},${longitude}&end_dt=${endDate}&dt=${startDate}`)
        .then(Response => Response.json())
        .then(data => {
            $(".one").text(data.forecast.forecastday[0].day.avgtemp_c + "°C")
            $(".two").text(data.forecast.forecastday[1].day.avgtemp_c + "°C")
            $(".three").text(data.forecast.forecastday[2].day.avgtemp_c + "°C")
            $(".day-one").text(data.forecast.forecastday[0].date)
            $(".day-two").text(data.forecast.forecastday[1].date)
            $(".day-three").text(data.forecast.forecastday[2].date)

        })

    fetch(`${baseURL}forecast.json?key=e21a55aa67274426b0183102231405&q=${latitude},${longitude}&days=4`)
        .then(Response => Response.json())
        .then(data => {
            console.log(data.forecast.forecastday[1].day.maxwind_kph)
            $(".future-wind-1").text(data.forecast.forecastday[0].day.maxwind_kph + " km/h")
            $(".future-wind-2").text(data.forecast.forecastday[1].day.maxwind_kph + " km/h")
            $(".future-wind-3").text(data.forecast.forecastday[2].day.maxwind_kph + " km/h")
            $(".future-humidity-1").text(data.forecast.forecastday[0].day.avghumidity + "%")
            $(".future-humidity-2").text(data.forecast.forecastday[1].day.avghumidity + "%")
            $(".future-humidity-3").text(data.forecast.forecastday[2].day.avghumidity + "%")
            $(".future-capacity-1").text(data.forecast.forecastday[0].day.avgtemp_c + "°C")
            $(".future-capacity-2").text(data.forecast.forecastday[1].day.avgtemp_c + "°C")
            $(".future-capacity-3").text(data.forecast.forecastday[2].day.avgtemp_c + "°C")
            $(".future-day-one").text(data.forecast.forecastday[0].date)
            $(".future-day-two").text(data.forecast.forecastday[1].date)
            $(".future-day-three").text(data.forecast.forecastday[2].date)

        })
}
// console.log(longitude+" " +latitude);


function getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, { weekday: 'long' });
}

let getCurrentDateAndTime = () => {
    let today = new Date().toISOString().slice(0, 10)
    $(".day").text(((getDayName(new Date(today)))))

    $(".time").text((new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false })));

}

const getSearchLocation = (location1) => {
    fetch(`${baseURL}timezone.json?key=e21a55aa67274426b0183102231405&q=${location1.value}`)
        .then(Response => Response.json())
        .then(data => {
            $(".city").text(data.location.name);;
            $(".country").text("," + data.location.country)
        })
}


const getCurrentWeathher = (location1) => {
    fetch(`${baseURL}current.json?key=e21a55aa67274426b0183102231405&q=${location1.value}`)
        .then(Response => Response.json())
        .then(data => {
            $(".current-temp").text(parseInt(data.current.temp_c))
            $(".current-feel").text(data.current.feelslike_c + "°")
            $(".current-humidity").text(data.current.humidity + "%")
            $(".current-wind").text(data.current.wind_kph + " km/h")
        })
}

const getHistoryWeathher = (location1) => {
    fetch(`${baseURL}history.json?key=e21a55aa67274426b0183102231405&q=${location1.value}&end_dt=${endDate}&dt=${startDate}`)
        .then(Response => Response.json())
        .then(data => {
            $(".one").text(data.forecast.forecastday[0].day.avgtemp_c + "°C")
            $(".two").text(data.forecast.forecastday[1].day.avgtemp_c + "°C")
            $(".three").text(data.forecast.forecastday[2].day.avgtemp_c + "°C")
            $(".day-one").text(data.forecast.forecastday[0].date)
            $(".day-two").text(data.forecast.forecastday[1].date)
            $(".day-three").text(data.forecast.forecastday[2].date)


          
        })
}

const getForecastWeathher = (location1) => {
    fetch(`${baseURL}forecast.json?key=e21a55aa67274426b0183102231405&q=${location1.value}&days=4`)
        .then(Response => Response.json())
        .then(data => {
            console.log(data.forecast.forecastday[1].day.maxwind_kph)
            $(".future-wind-1").text(data.forecast.forecastday[0].day.maxwind_kph + " km/h")
            $(".future-wind-2").text(data.forecast.forecastday[1].day.maxwind_kph + " km/h")
            $(".future-wind-3").text(data.forecast.forecastday[2].day.maxwind_kph + " km/h")
            $(".future-humidity-1").text(data.forecast.forecastday[0].day.avghumidity + "%")
            $(".future-humidity-2").text(data.forecast.forecastday[1].day.avghumidity + "%")
            $(".future-humidity-3").text(data.forecast.forecastday[2].day.avghumidity + "%")
            $(".future-capacity-1").text(data.forecast.forecastday[0].day.avgtemp_c + "°C")
            $(".future-capacity-2").text(data.forecast.forecastday[1].day.avgtemp_c +"°C")
            $(".future-capacity-3").text(data.forecast.forecastday[2].day.avgtemp_c + "°C")
            $(".future-day-one").text(data.forecast.forecastday[0].date)
            $(".future-day-two").text(data.forecast.forecastday[1].date)
            $(".future-day-three").text(data.forecast.forecastday[2].date)

        }) 

    // console.log(data.forecast.forecastday[1].date))
}



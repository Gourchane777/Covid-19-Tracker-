
country_name = sessionStorage.getItem('country_name')


$(function(){



     
 $.get(`https://corona.lmao.ninja/v2/countries/${country_name}`,function(data){

let cases = data.cases
   cases = new Intl.NumberFormat().format(cases)
   
let flag  = data.countryInfo.flag
let updated = data.updated
updated = new Intl.NumberFormat().format(updated)

let country = data.country
let deaths = data.deaths
deaths = new Intl.NumberFormat().format(deaths)
let recovered = data.recovered
recovered = new Intl.NumberFormat().format(recovered)

let critical = data.critical
    critical = new Intl.NumberFormat().format(critical)
let tests   = data.tests
    tests   = new Intl.NumberFormat().format(tests)
let continent = data.continent
let population = data.population
    population = new Intl.NumberFormat().format(population)
let active =  data.active
    active = new Intl.NumberFormat().format(active)

$("#flag").append(

    `<img style="width:50%" src="${flag}">`
)
$(".country").text(country)
$(".continent").text(continent)
$(".a1").text(cases)
$(".a1").append( '<small style="font-family:arial; font-size:10px" class="d-block">+CASES</small>')
$(".a2").text(deaths)
$(".a2").append(
    '<small style="font-family:arial; font-size:10px" class="d-block">+DEATHS</small>'
)
$(".a3").text(updated)
$(".a3").append(
    '<small style="font-family:arial; color: rgb(187, 187, 187); font-size:10px" class="d-block">+UPDATED</small>'
)

$(".a4").text(recovered)
$(".a4").append(
    '<small style="font-family:arial; color: rgb(187, 187, 187); font-size:10px" class="d-block">+RECOVERED</small>'
)

$(".a5").text(critical)
$(".a5").append(
    '<small style="font-family:arial; color: rgb(187, 187, 187); font-size:10px" class="d-block">+CRITICAL</small>'
)

$(".a33").text(tests)
$(".a33").append(
    '<small style="font-family:arial; color: rgb(187, 187, 187); font-size:10px" class="d-block">+CRITICAL</small>'
)

$(".a55").text(population)
$(".a55").append(
    '<small style="font-family:arial; color: rgb(187, 187, 187); font-size:10px" class="d-block">+POPULATION</small>'
)
$(".a44").text(active)
$(".a44").append(
    '<small style="font-family:arial; color: rgb(187, 187, 187); font-size:10px" class="d-block">+ACTIVE</small>'
)

Chart.defaults.global.title.display = true
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: [''],
        datasets: [
            {
                label:"Cases",
                data:[data.cases],
                backgroundColor:"#ff416c",
                minBarLength:100,
                
            },
            {
                label:"Recovered",
                data: [data.recovered],
                backgroundColor:"#007BFF",
                minBarLength:100,

            },
            {
                label:"Deaths",
                data: [data.deaths],
                backgroundColor:"#f81a37",
                minBarLength:100,

            },
            {
                label:"Critical",
                data: [data.critical],
                backgroundColor:"#fbf707",
                minBarLength:100,

            },
        ]
    },
    // Configuration options go here
    options: {
        title:{
            text : `${country} 7 Days Statistic`,
        }
    }
});

})
    
})



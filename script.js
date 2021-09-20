$(function(){

  $("#modal").hide()
  $("#parent").hide()
  let time = setInterval(myTimer,3000);


  // Api of statistique of covid-19
$.get('https://corona.lmao.ninja/v2/all',function(data){

    console.log(data);
    // Statistique of Active
  let active =  data.active
 active = new  Intl.NumberFormat().format(active)
  console.log(active);
$(".h3").text(active)
 
 // statistique of Deaths
  let deaths = data.deaths
  deaths = new  Intl.NumberFormat().format(deaths)
  console.log(deaths);
  $(".DEAT").text(deaths)

   // statistique of recovered
  let recovered = data.recovered
  recovered = new  Intl.NumberFormat().format(recovered)
  console.log(recovered);
  $(".RECO").text(recovered)
    })
  

// Api of statistique each country 
$.get('https://corona.lmao.ninja/v2/countries', function(countries){

    console.log(countries)

    for(i=0; i<countries.length; i++){

        
        let country = countries[i].country
        let active  = countries[i].active
        
        active = new Intl.NumberFormat().format(active)

        let flag    = countries[i].countryInfo.flag
  

    
       let cols = 
       ` <tr class="d-flex align-items-center justify-content-around country"> <td style='width:30%; border:none;'>   <img style='width:40%;' src="${flag} "> </td> 
       <a>  <td  class='text-left fs-6 text-light filter-countrie' style=' width:35%; border:none;'>  ${country} </td> 
           <td class='text-right fs-6 ' style=' width:35%; border:none;     color: #ff416c;
          '> ${active} </td> </a>  </tr>` 
  
       $("tbody").append(cols)
      
     }  
    

})

$("#Tbody").on("click", "tr",function(){
 let country  = $(this).children()[1].textContent

 sessionStorage.setItem('country_name',country)

 window.location.href="./detail.html"
})


$("#go").click(function(){

 inputValue = $("#goCountry").val()

 
 if($("#goCountry").val() == ""){
   $("#goCountry").addClass(" border border-danger")
  $("#error").text("Please,Enter your Country")
  $("#error").addClass("text-danger text-center")
 }else{
  $("#error").text("")
  $("input").addClass(" border border-primary")
   sessionStorage.setItem('country_name',inputValue)
   window.location.href="./detail.html"
 }
 console.log(inputValue)


 


})



   $("#searchText").keyup(function(){
    let input_value = $("#searchText").val().toUpperCase()
    let trs = $("tr")
    for(i=0; i<trs.length; i++){
      let ligne = trs[i] 
      //console.log(ligne)
      let child  = $(ligne).children()
      let c = child[1].textContent.toUpperCase()
     let compare = c.includes(input_value)
      
     if(compare == false){
          $("tbody tr:nth-child("+(i+1)+")").find("td").hide()
     }else{
      $("tbody tr:nth-child("+(i+1)+")").find("td").show()

    }

    }


   })

})


  
$(".fas").click(function(){
  $("#modal").remove()
  $("#parent").remove()
})


function myTimer(){
  $("#parent").show()
  $("#modal").show()
}

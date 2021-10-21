
var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var date = (today.getDate()+1)+'-'+today.getMonth()+'-'+today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
document.getElementById("displayDate").innerHTML='India : '+date ;

function fetch(){
  $.get(" https://api.covid19api.com/summary",
  function(data){
    //console.log(data['Countries'].length);
    var tbval=document.getElementById('tbval');
    for(var i = 1;i<(data['Countries'].length);i++){
      var x = tbval.insertRow();
      x.insertCell(0);
      tbval.rows[i].cells[0].innerHTML=data['Countries'][i-1]['Country'];
      tbval.rows[i].cells[0].style.background='#656464';
    

      x.insertCell(1);
      tbval.rows[i].cells[1].innerHTML=data['Countries'][i-1]['TotalConfirmed'];
      tbval.rows[i].cells[1].style.background='#656464';
    
      x.insertCell(2);
      tbval.rows[i].cells[2].innerHTML=data['Countries'][i-1]['TotalRecovered'];
      tbval.rows[i].cells[2].style.background='#656464';
    
      x.insertCell(3);
      tbval.rows[i].cells[3].innerHTML=data['Countries'][i-1]['TotalDeaths'];
      tbval.rows[i].cells[3].style.background='#656464';
    
      x.insertCell(4);
      tbval.rows[i].cells[4].innerHTML=data['Countries'][i-1]['NewDeaths'];
      tbval.rows[i].cells[4].style.background='#656464';
    
    }


  })
  $(".flip").click(function(){
    $(this).parents(".card").toggleClass("flipped");
  });
  $(".clickcard").click(function(){
    $(this).toggleClass("flipped");
  });
}

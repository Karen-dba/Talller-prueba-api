$(document).ready(function(){
    
    $("#submitCity").click(function(){
        return getWeather();
    });
    
    
});

function getWeather(){
    var city = $("#city").val();
    
    if(city != ''){
        
        $.ajax({
           url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + city + "&key=AIzaSyBtM7z9X8CXhR-98-uXL9CsJlsUDp5ReeM",

            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var widget = showResults(data)
                
                
                $("#showWeather").html(widget);
                
                $("#city").val('');
            }
            
        });
        
        
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
    
    
}

function showResults(data)
{
    console.log(data);
    const videoTitle = data.items[0].snippet.title;
    console.log(data.items.length);
    var table = '';

    for(var i = 1; i < data.items.length; i++){
        table+='<div id="video" class="row">';
        table+='<h2>'+data.items[i].snippet.title+'</h2>';
        table+='<iframe width="640" height="360" src="https://www.youtube.com/embed/'+ data.items[i].id.videoId+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        table+='<p>Description: '+data.items[i].snippet.description+'</p>'
        table+='</div>';
    }  
    $("#showWeather").html(table);
    return;
}


/*function showResults(data){
    return '<h2>'+data.items[0].snippet.title+'</h2>'+
    '<iframe width="640" height="360" src="https://www.youtube.com/embed/'+ data.items[0].id.videoId+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' 



            '<h2 style="font-weight:bold; font-size:30px; padding-top:20px;" class="text-center">Current Weather for '+data.name+', '+data.sys.country+'</h2>'+
            "<h3 style='padding-left:40px;'><strong>Weather</strong>: "+data.weather[0].main+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+data.weather[0].description+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Temperature</strong>: "+data.main.temp+" &deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Pressure</strong>: "+data.main.pressure+" hpa</h3>"+
            "<h3 style='padding-left:40px;'><strong>Humidity</strong>: "+data.main.humidity+"%</h3>"+
            "<h3 style='padding-left:40px;'><strong>Min Temperature</strong>: "+data.main.temp_min+"&deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Max Temperature</strong>: "+data.main.temp_max+"&deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Wind Speed</strong>: "+data.wind.speed+"m/s</h3>"+
            "<h3 style='padding-left:40px; padding-bottom:30px;'><strong>Wind Direction</strong>: "+data.wind.deg+"&deg;</h3>";
}

*/











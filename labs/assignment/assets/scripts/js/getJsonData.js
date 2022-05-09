$(document).ready(function(){
    $.getJSON('./assets/models/data.json', function(jsonObj){
        console.log(jsonObj);
        var ids = {
            "home": 0,
            "coke": 1,
            "sprite": 2,
            "pepper": 3,
            "drinks": 4,
            "test": 5
          };

        $('#title_home').html('<h2>' + jsonObj.pageTextData[ids["home"]].title + '</h2>');
        $('#description_home').html('<p>' + jsonObj.pageTextData[ids["home"]].description + '</p>');
        $('#title_home_temp').html('<h2>' + jsonObj.pageTextData[ids["home"]].tempTitle + '</h2>');
        $('#description_home_temp').html('<p>' + jsonObj.pageTextData[ids["home"]].tempDescription + '</p>');
    
        $('#title_coke').html('<h3 class="card-title">' + jsonObj.pageTextData[1].title + '</h3>');
        $('#description_coke').html('<p class="card-text">' + jsonObj.pageTextData[1].description + '</p>');
        $('#exp_title_coke').html('<h3 class="card-title">' + jsonObj.pageTextData[1].title + '</h3>');
        $('#exp_description_coke').html('<p class="card-text">' + jsonObj.pageTextData[1].description + '</p>');

        $('#title_sprite').html('<h3 class="card-title">' + jsonObj.pageTextData[ids["sprite"]].title + '</h3>');
        $('#description_sprite').html('<p class="card-text">' + jsonObj.pageTextData[ids["sprite"]].description + '</p>');

        $('#title_pepper').html('<h3 class="card-title">' + jsonObj.pageTextData[ids["pepper"]].title + '</h3>');
        $('#description_pepper').html('<p class="card-text">' + jsonObj.pageTextData[ids["pepper"]].description + '</p>');

        $('#test2').html('<p class="card-text">'+ jsonObj.pageTextData[0].title + '</p>');
    });
});
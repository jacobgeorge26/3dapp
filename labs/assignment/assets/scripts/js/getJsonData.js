var ids = {
    "home": 0,
    "mod1": 1,
    "mod2": 2,
    "mod3": 3,
    "urls": 4
    };

$(document).ready(function(){
    $.getJSON('./assets/models/data.json', function(jsonObj){
        //console.log(jsonObj);
        //getHtml(jsonObj);
    });
});

function getData(){
    jQuery.getJSON('./assets/models/data.json', function(jsonObj){
        console.log(jsonObj);
        getHtml(jsonObj);
    });
}

function getHtml(jsonObj){
    //HOME
    $('#title_home').html('<h2>' + jsonObj.pageTextData[ids["home"]].title + '</h2>');
    $('#description_home').html('<p>' + jsonObj.pageTextData[ids["home"]].description + '</p>');

    //MODEL 1
    $('#title_coke').html('<h3 class="card-title">' + jsonObj.pageTextData[ids["mod1"]].title + '</h3>');
    $('#description_coke').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod1"]].description + '</p>');
    $('#exp_title_coke').html('<h3 class="card-title">' + jsonObj.pageTextData[ids["mod1"]].title + '</h3>');
    $('#exp_description_coke').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod1"]].description + '</p>');

    //MODEL 2
    $('#title_sprite').html('<h3 class="card-title">' + jsonObj.pageTextData[ids["mod2"]].title + '</h3>');
    $('#description_sprite').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod2"]].description + '</p>');

    //MODEL 3
    $('#title_pepper').html('<h3 class="card-title">' + jsonObj.pageTextData[ids["mod3"]].title + '</h3>');
    $('#description_pepper').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod3"]].description + '</p>');

    $archive = '<a href="'+ jsonObj.pageTextData[ids["urls"]].archive + '"><i class="fa fa-info fa-2x social-icon"></i></a>';
    $models = '<a href="'+ jsonObj.pageTextData[ids["urls"]].models + '"><i class="fa fa-file-code-o fa-2x social-icon"></i></a>';
    $github = '<a href="'+ jsonObj.pageTextData[ids["urls"]].mainRepo + '"><i class="fa fa-github-square fa-2x social-icon"></i></a>';
    $('#social-links').html($archive + $models + $github);
}